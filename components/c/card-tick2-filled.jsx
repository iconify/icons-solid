import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8_y_zb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8_y_zb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-tick2-filled"} {...others} />);
}

export default Component;
