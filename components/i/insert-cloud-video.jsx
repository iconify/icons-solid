import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tonlp_bxm.css';
import '../../css/z/zac3mgbdy.css';
import '../../css/o/o4a6nzb5i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tonlp_bxm"/><path class="zac3mgbdy"/><path class="o4a6nzb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insert-cloud-video"} {...others} />);
}

export default Component;
