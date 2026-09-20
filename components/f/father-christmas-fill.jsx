import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdr35o1ib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdr35o1ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:father-christmas-fill"} {...others} />);
}

export default Component;
