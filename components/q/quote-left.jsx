import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf4ud-_ib.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zf4ud-_ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:quote-left"} {...others} />);
}

export default Component;
