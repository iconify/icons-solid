import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlo08zxww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hlo08zxww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:boom-barrier-alert-outline"} {...others} />);
}

export default Component;
