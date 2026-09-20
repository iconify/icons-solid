import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b82tnpazp.css';
import '../../css/u/u6jj-hn4u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b82tnpazp"/><path class="u6jj-hn4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:needleleaved-tree-urban-tree-pot"} {...others} />);
}

export default Component;
