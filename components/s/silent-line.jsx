import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmizg-b1r.css';
import '../../css/n/nu2y03fco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmizg-b1r"/><path class="nu2y03fco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:silent-line"} {...others} />);
}

export default Component;
