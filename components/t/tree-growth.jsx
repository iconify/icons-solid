import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh3w2t_7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bh3w2t_7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tree-growth"} {...others} />);
}

export default Component;
