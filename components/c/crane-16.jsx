import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy6bdibix.css';
import '../../css/g/gvxfo6vqt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hy6bdibix"/><path clip-rule="evenodd" class="gvxfo6vqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:crane-16"} {...others} />);
}

export default Component;
