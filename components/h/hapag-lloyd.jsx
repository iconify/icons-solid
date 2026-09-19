import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc11kh5kq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc11kh5kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hapag-lloyd"} {...others} />);
}

export default Component;
