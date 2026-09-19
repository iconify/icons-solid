import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edvji8e5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="edvji8e5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:relationship-bounds"} {...others} />);
}

export default Component;
