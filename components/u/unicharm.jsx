import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2a-tdbwz.css';
import '../../css/g/gqibrxbyv.css';
import '../../css/a/a8dbi7zcs.css';

const viewBox = {"width":1595,"height":1596};
const content = `<path class="b2a-tdbwz"/><path class="gqibrxbyv"/><path class="a8dbi7zcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unicharm"} {...others} />);
}

export default Component;
