import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6oybf-di.css';
import '../../css/d/dh5g9c5ua.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z6oybf-di"/><path class="dh5g9c5ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bug"} {...others} />);
}

export default Component;
