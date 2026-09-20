import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg-3l4cle.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wg-3l4cle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-rotate2-filled"} {...others} />);
}

export default Component;
