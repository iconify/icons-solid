import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/z38p5-b0s.css';
import '../../css/p/poddjgb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="z38p5-b0s"/><path class="poddjgb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-image"} {...others} />);
}

export default Component;
