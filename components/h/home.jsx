import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2hdh4u_p.css';
import '../../css/p/p7m4fxbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2hdh4u_p"/><path class="p7m4fxbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:home"} {...others} />);
}

export default Component;
