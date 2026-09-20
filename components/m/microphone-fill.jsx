import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsz94vn-b.css';
import '../../css/k/kvf4_8b4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsz94vn-b"/><path class="kvf4_8b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:microphone-fill"} {...others} />);
}

export default Component;
