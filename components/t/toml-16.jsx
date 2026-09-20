import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnf3jj1ai.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jnf3jj1ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:toml-16"} {...others} />);
}

export default Component;
