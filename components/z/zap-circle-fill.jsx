import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg7t42bnk.css';
import '../../css/u/ustelzbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fg7t42bnk"/><path class="ustelzbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:zap-circle-fill"} {...others} />);
}

export default Component;
