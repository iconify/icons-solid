import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwrs5jbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwrs5jbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:type-outline-filled"} {...others} />);
}

export default Component;
