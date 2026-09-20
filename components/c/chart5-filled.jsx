import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axwlv8_bk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axwlv8_bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart5-filled"} {...others} />);
}

export default Component;
