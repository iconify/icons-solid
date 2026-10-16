import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsm4e0bue.css';
import '../../css/b/bu7uf3bkq.css';
import '../../css/p/p0z59inze.css';
import '../../css/x/x__xt5bdg.css';

const viewBox = {"width":59,"height":40};
const content = `<path class="rsm4e0bue"/><path class="bu7uf3bkq"/><path class="p0z59inze"/><path class="x__xt5bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:castopod"} {...others} />);
}

export default Component;
