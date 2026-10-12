import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbl53bb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbl53bb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:squares-subtract-filled"} {...others} />);
}

export default Component;
