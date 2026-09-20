import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2ng3jt7l.css';
import '../../css/j/j6bkybbuh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c2ng3jt7l"/><path class="j6bkybbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:cog"} {...others} />);
}

export default Component;
