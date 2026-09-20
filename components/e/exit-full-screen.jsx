import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq-nx2bdn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uq-nx2bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:exit-full-screen"} {...others} />);
}

export default Component;
