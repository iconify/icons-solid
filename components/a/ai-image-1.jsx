import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/my8uhhvfk.css';
import '../../css/p/poddjgb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="my8uhhvfk"/><path class="poddjgb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-image-1"} {...others} />);
}

export default Component;
