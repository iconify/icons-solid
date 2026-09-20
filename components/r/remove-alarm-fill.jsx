import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiqiw5b2f.css';
import '../../css/w/wz4v0s-qh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tiqiw5b2f"/><path clip-rule="evenodd" class="wz4v0s-qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:remove-alarm-fill"} {...others} />);
}

export default Component;
