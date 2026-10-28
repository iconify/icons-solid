import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uk5nk-big.css';
import '../../css/f/fdgjnrd3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="uk5nk-big"/><path class="fdgjnrd3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:cart"} {...others} />);
}

export default Component;
