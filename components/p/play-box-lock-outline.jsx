import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh7v1eb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qh7v1eb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:play-box-lock-outline"} {...others} />);
}

export default Component;
