import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy6nseels.css';
import '../../css/q/qbt4lgb4f.css';
import '../../css/i/i5jz4wyel.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vy6nseels"/><path class="qbt4lgb4f"/><path class="i5jz4wyel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:senlo"} {...others} />);
}

export default Component;
