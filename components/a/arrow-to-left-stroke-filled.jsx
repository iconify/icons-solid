import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mar89_b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mar89_b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-to-left-stroke-filled"} {...others} />);
}

export default Component;
