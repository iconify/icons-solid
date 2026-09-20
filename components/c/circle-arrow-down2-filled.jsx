import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw_sl3b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iw_sl3b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrow-down2-filled"} {...others} />);
}

export default Component;
