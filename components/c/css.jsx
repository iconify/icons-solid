import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1-dwjb4v.css';
import '../../css/e/eb8y78alh.css';
import '../../css/s/snrwjzxed.css';
import '../../css/r/r_0ztem8x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r1-dwjb4v"/><path class="eb8y78alh"/><path class="snrwjzxed"/><path class="r_0ztem8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:css"} {...others} />);
}

export default Component;
