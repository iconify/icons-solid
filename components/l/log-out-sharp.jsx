import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9ifyts6f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d9ifyts6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:log-out-sharp"} {...others} />);
}

export default Component;
