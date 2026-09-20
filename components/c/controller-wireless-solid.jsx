import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrbs79i2w.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mrbs79i2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:controller-wireless-solid"} {...others} />);
}

export default Component;
