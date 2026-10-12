import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgv34el5t.css';
import '../../css/n/nsl4o5b_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fgv34el5t"/><path class="nsl4o5b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-generic-fill-20"} {...others} />);
}

export default Component;
