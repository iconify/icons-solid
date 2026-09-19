import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8_pu0lwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8_pu0lwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:square-root-filled"} {...others} />);
}

export default Component;
