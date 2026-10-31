import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw5-de5vv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pw5-de5vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-gloss"} {...others} />);
}

export default Component;
