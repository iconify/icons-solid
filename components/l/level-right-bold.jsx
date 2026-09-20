import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv_zncb2p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gv_zncb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:level-right-bold"} {...others} />);
}

export default Component;
