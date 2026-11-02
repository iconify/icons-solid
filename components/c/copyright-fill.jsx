import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j52f7_bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j52f7_bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:copyright-fill"} {...others} />);
}

export default Component;
