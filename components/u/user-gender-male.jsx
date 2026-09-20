import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-ihz2d6k.css';
import '../../css/j/jnzjgqb7t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d-ihz2d6k"/><path class="jnzjgqb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-gender-male"} {...others} />);
}

export default Component;
