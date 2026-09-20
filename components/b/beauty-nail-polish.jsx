import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1z85nbdr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z1z85nbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-nail-polish"} {...others} />);
}

export default Component;
