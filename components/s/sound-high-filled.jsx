import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb09m4xda.css';
import '../../css/g/gra6cwz6v.css';
import '../../css/y/yp1_ldbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tb09m4xda"/><path class="gra6cwz6v"/><path class="yp1_ldbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sound-high-filled"} {...others} />);
}

export default Component;
