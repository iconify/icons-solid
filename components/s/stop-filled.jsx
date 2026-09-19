import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mibn7eb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="mibn7eb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:stop-filled"} {...others} />);
}

export default Component;
