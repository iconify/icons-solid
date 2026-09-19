import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9ibu5b2o.css';
import '../../css/e/ehoh4z-9v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o9ibu5b2o"/><path class="ehoh4z-9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-with-diagonal-mouth"} {...others} />);
}

export default Component;
