import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg8k5ebzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg8k5ebzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:settings-gear"} {...others} />);
}

export default Component;
