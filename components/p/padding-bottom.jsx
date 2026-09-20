import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8k9kjbqe.css';
import '../../css/u/u_90zur1c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t8k9kjbqe"/><path class="u_90zur1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:padding-bottom"} {...others} />);
}

export default Component;
