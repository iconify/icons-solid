import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcifvji8v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vcifvji8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:manhole-cover-with-sewage-pipe-cross-section"} {...others} />);
}

export default Component;
