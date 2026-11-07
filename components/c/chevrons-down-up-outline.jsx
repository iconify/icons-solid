import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/argozxbrb.css';
import '../../css/g/gtd6d5jyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="argozxbrb"/><path class="gtd6d5jyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-outline"} {...others} />);
}

export default Component;
