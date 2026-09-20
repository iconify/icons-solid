import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhi_7zbfl.css';
import '../../css/m/mjirkcbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhi_7zbfl"/><path class="mjirkcbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:browse-filled"} {...others} />);
}

export default Component;
