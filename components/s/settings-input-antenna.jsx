import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siwd_6bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="siwd_6bfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:settings-input-antenna"} {...others} />);
}

export default Component;
