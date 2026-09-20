import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr32yxbru.css';
import '../../css/a/aa4zmqbdz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hr32yxbru"/><path clip-rule="evenodd" class="aa4zmqbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:travel-accessibility"} {...others} />);
}

export default Component;
