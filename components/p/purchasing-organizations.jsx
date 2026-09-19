import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6fj7fx9j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z6fj7fx9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:purchasing-organizations"} {...others} />);
}

export default Component;
