import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-fg1db2d.css';
import '../../css/f/frl31gg3f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p-fg1db2d"/><path class="frl31gg3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:sign-in"} {...others} />);
}

export default Component;
