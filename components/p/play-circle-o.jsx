import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd_9zuben.css';
import '../../css/n/nbxt_1b6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vd_9zuben"/><path class="nbxt_1b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:play-circle-o"} {...others} />);
}

export default Component;
