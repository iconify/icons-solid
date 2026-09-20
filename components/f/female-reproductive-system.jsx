import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr-jp9bne.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hr-jp9bne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:female-reproductive-system"} {...others} />);
}

export default Component;
