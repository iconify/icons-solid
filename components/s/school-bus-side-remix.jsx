import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni_m1ubni.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ni_m1ubni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:school-bus-side-remix"} {...others} />);
}

export default Component;
