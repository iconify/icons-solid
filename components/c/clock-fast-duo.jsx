import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njo-2mzrh.css';
import '../../css/s/saiuxqbjq.css';
import '../../css/t/t8e0g0b1d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="njo-2mzrh"/><path class="saiuxqbjq"/><path class="t8e0g0b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-fast-duo"} {...others} />);
}

export default Component;
