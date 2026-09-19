import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0-a0abty.css';
import '../../css/v/v8sj7cvzk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="b0-a0abty"/><path class="v8sj7cvzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:shopping-cart-full"} {...others} />);
}

export default Component;
