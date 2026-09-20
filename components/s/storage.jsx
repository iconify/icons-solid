import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnl6okbyg.css';
import '../../css/d/db9d_bb7i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hnl6okbyg"/><path class="db9d_bb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:storage"} {...others} />);
}

export default Component;
