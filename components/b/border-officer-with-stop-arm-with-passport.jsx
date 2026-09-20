import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhdzl1b5f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vhdzl1b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:border-officer-with-stop-arm-with-passport"} {...others} />);
}

export default Component;
