import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixktuwbjo.css';
import '../../css/c/cvfddkb1b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ixktuwbjo"/><path class="cvfddkb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-chipset"} {...others} />);
}

export default Component;
