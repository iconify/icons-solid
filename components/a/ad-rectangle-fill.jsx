import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfh45bc7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfh45bc7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ad-rectangle-fill"} {...others} />);
}

export default Component;
