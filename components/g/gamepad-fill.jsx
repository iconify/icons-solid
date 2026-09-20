import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wksg6tbhg.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="wksg6tbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:gamepad-fill"} {...others} />);
}

export default Component;
