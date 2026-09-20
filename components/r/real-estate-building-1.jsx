import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ykdnb4c.css';
import '../../css/b/bv8dp7-9q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e7ykdnb4c"/><path class="bv8dp7-9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-1"} {...others} />);
}

export default Component;
