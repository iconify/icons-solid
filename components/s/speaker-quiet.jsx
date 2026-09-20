import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btr0sh55s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="btr0sh55s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:speaker-quiet"} {...others} />);
}

export default Component;
