import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/r/rirt7bcol.css';
import '../../css/m/mzxbszjzr.css';
import '../../css/d/dmlxnibql.css';
import '../../css/r/ryby98ucd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="rirt7bcol"/><path class="mzxbszjzr"/><path class="dmlxnibql"/><path class="ryby98ucd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:postcss"} {...others} />);
}

export default Component;
