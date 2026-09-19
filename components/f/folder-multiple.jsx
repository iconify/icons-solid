import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg52-i0ys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rg52-i0ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:folder-multiple"} {...others} />);
}

export default Component;
