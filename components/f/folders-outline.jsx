import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quzl_8ckk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="quzl_8ckk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folders-outline"} {...others} />);
}

export default Component;
