import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4w_9_brk.css';
import '../../css/h/h4t1d2bui.css';
import '../../css/o/o2c4vcs2v.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="n4w_9_brk"/><path class="h4t1d2bui"/><path class="o2c4vcs2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-export-pdf"} {...others} />);
}

export default Component;
