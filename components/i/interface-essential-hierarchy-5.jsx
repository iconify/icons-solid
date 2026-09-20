import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7kjhxbwx.css';
import '../../css/k/kk94g-bkd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m7kjhxbwx"/><path class="kk94g-bkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hierarchy-5"} {...others} />);
}

export default Component;
