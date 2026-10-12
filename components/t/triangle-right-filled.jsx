import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqm22z9lz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqm22z9lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:triangle-right-filled"} {...others} />);
}

export default Component;
