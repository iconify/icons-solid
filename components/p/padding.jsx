import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh09se2-w.css';
import '../../css/d/d-u2lgcch.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bh09se2-w"/><path class="d-u2lgcch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:padding"} {...others} />);
}

export default Component;
