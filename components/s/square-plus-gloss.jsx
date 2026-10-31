import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so7yid75e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="so7yid75e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-plus-gloss"} {...others} />);
}

export default Component;
