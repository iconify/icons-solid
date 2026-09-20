import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5fdbb3rh.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="f5fdbb3rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:gamepad-left-fill"} {...others} />);
}

export default Component;
