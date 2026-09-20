import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4kl6cbwo.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l4kl6cbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-bag-hand-bag-2-solid"} {...others} />);
}

export default Component;
