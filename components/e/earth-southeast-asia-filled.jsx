import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_kkayb9j.css';
import '../../css/i/iiryr56qr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c_kkayb9j"/><path class="iiryr56qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:earth-southeast-asia-filled"} {...others} />);
}

export default Component;
