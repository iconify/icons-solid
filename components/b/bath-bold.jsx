import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqdha0jda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqdha0jda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-bold"} {...others} />);
}

export default Component;
