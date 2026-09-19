import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlzy1_b2o.css';
import '../../css/h/hv0axw6am.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tlzy1_b2o"/><path class="hv0axw6am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eraser-fill-16"} {...others} />);
}

export default Component;
