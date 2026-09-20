import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2lcz1btz.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1.5};
const content = `<path class="q2lcz1btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:highlighter-f"} {...others} />);
}

export default Component;
