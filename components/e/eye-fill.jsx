import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/holrsn7wm.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="holrsn7wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:eye-fill"} {...others} />);
}

export default Component;
