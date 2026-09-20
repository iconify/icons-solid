import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdnb4ibza.css';
import '../../css/v/va7yy6tym.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fdnb4ibza"/><path class="va7yy6tym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-button-bottom-16"} {...others} />);
}

export default Component;
