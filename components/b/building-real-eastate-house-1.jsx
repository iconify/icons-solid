import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmp4o6v6i.css';
import '../../css/w/wlilhubec.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bmp4o6v6i"/><path class="wlilhubec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-house-1"} {...others} />);
}

export default Component;
