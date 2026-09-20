import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lombof_ph.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="lombof_ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:affordable-and-clean-energy-solid"} {...others} />);
}

export default Component;
