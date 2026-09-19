import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h98w36btb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h98w36btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-right-circle-filled"} {...others} />);
}

export default Component;
