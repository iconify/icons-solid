import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-jnrqjqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-jnrqjqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-bottom"} {...others} />);
}

export default Component;
