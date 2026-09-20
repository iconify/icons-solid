import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qox0n4a5t.css';
import '../../css/e/e05xc9bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qox0n4a5t"/><path clip-rule="evenodd" class="e05xc9bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:android-24"} {...others} />);
}

export default Component;
