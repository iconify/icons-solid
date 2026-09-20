import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uaf-dkble.css';
import '../../css/z/zk0ke1b2b.css';
import '../../css/j/jjxkvab0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uaf-dkble"/><path class="zk0ke1b2b"/><path class="jjxkvab0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:deepfake-technology-2"} {...others} />);
}

export default Component;
