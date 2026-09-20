import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe3oz-bur.css';
import '../../css/j/jzslicbuh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oe3oz-bur"/><path class="jzslicbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-movie"} {...others} />);
}

export default Component;
