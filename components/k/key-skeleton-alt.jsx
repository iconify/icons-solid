import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ud49bhs.css';
import '../../css/z/zhvsnqbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1ud49bhs"/><path class="zhvsnqbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:key-skeleton-alt"} {...others} />);
}

export default Component;
