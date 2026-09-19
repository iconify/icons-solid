import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da8z4_zfg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="da8z4_zfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:delivery-truck-small-filled"} {...others} />);
}

export default Component;
