import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soceu0b6b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="soceu0b6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sauvastika-with-dots"} {...others} />);
}

export default Component;
