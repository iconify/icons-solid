import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9prg-o0h.css';

const viewBox = {"width":352,"height":528};
const content = `<path class="v9prg-o0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:pin-map"} {...others} />);
}

export default Component;
