import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0x1nqbid.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s0x1nqbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:z-lpar"} {...others} />);
}

export default Component;
