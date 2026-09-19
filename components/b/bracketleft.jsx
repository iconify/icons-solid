import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2n0ttdhg.css';

const viewBox = {"width":168,"height":954};
const content = `<path class="c2n0ttdhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:bracketleft"} {...others} />);
}

export default Component;
