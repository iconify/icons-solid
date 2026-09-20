import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai-hwv_fk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ai-hwv_fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:exclamation-point-beside-exclamation-point"} {...others} />);
}

export default Component;
