import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z4dzdqz2i.css';
import '../../css/b/bqlg_qjwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z4dzdqz2i"/><path class="bqlg_qjwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-compass"} {...others} />);
}

export default Component;
