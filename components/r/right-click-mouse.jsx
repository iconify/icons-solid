import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9we3cbvi.css';
import '../../css/x/xcnaicqhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i9we3cbvi"/><path class="xcnaicqhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:right-click-mouse"} {...others} />);
}

export default Component;
