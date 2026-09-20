import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/limzqubuc.css';
import '../../css/a/ar6xy1boo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="limzqubuc"/><path class="ar6xy1boo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:user-heart"} {...others} />);
}

export default Component;
