import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss6rcc_ua.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ss6rcc_ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:password-alt-filled"} {...others} />);
}

export default Component;
