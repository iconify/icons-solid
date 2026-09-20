import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ec8b_s3sk.css';
import '../../css/h/huowa6u2d.css';
import '../../css/w/w34wc278m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ec8b_s3sk"/><path class="huowa6u2d"/><path class="w34wc278m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:multiple-file-1-flat"} {...others} />);
}

export default Component;
