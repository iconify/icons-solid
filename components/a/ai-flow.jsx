import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk6t0lwsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk6t0lwsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:ai-flow"} {...others} />);
}

export default Component;
