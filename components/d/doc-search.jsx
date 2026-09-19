import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwzldfrvf.css';
import '../../css/m/mx362vb_b.css';
import '../../css/s/s3a1y7bdg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gwzldfrvf"/><path class="mx362vb_b"/><path class="s3a1y7bdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:doc-search"} {...others} />);
}

export default Component;
