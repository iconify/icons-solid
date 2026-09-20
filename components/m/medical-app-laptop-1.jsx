import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2g7jybbe.css';
import '../../css/h/hku2f-bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e2g7jybbe"/><path class="hku2f-bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-app-laptop-1"} {...others} />);
}

export default Component;
