import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e-wq-gbry.css';
import '../../css/j/jd9oj6bsd.css';
import '../../css/m/me9fnacoo.css';
import '../../css/h/h84h5sl9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e-wq-gbry"/><path class="jd9oj6bsd"/><path class="me9fnacoo"/><path class="h84h5sl9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-money-flower"} {...others} />);
}

export default Component;
