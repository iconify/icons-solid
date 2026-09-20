import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_enfybsp.css';
import '../../css/r/rrjee4b2a.css';
import '../../css/z/ztx3gnhsa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z_enfybsp"/><path class="rrjee4b2a"/><path class="ztx3gnhsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:archives"} {...others} />);
}

export default Component;
