import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mamr9hpmo.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="mamr9hpmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:innowatio-logo"} {...others} />);
}

export default Component;
