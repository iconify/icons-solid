import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0nb7cc6b.css';
import '../../css/o/o3ain3blr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d0nb7cc6b"/><path class="o3ain3blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:non-gmo-fertilizer"} {...others} />);
}

export default Component;
