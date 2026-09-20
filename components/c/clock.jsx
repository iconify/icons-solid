import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaye1ubvf.css';
import '../../css/e/ej6vge06z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uaye1ubvf"/><path class="ej6vge06z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:clock"} {...others} />);
}

export default Component;
