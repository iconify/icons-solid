import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_nb4-z7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_nb4-z7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clock-1-filled"} {...others} />);
}

export default Component;
