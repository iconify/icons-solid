import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh6whn39j.css';

const viewBox = {"width":770,"height":1025};
const content = `<path class="jh6whn39j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:placeadd"} {...others} />);
}

export default Component;
