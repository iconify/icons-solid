import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3cnu0b3i.css';
import '../../css/e/e3rn21oia.css';
import '../../css/e/e67e0wblf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3cnu0b3i"/><path class="e3rn21oia"/><path class="e67e0wblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-minus-outline"} {...others} />);
}

export default Component;
