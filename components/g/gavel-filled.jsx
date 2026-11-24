import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmb5cnbye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmb5cnbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gavel-filled"} {...others} />);
}

export default Component;
