import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r13vadc4w.css';
import '../../css/c/cxb1kbche.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r13vadc4w"/><path class="cxb1kbche"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:slickdeals"} {...others} />);
}

export default Component;
