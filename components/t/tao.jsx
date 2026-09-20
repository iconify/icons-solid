import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhho48bfz.css';
import '../../css/w/wwzz0g8ua.css';
import '../../css/h/hrqogvl7h.css';
import '../../css/c/c8yp3-h5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhho48bfz"/><path class="wwzz0g8ua"/><path class="hrqogvl7h"/><path class="c8yp3-h5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tao"} {...others} />);
}

export default Component;
