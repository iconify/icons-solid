import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm8_k8bqn.css';
import '../../css/t/tw8conbhh.css';
import '../../css/t/tph-xsvjv.css';
import '../../css/o/ow39d0b3q.css';
import '../../css/a/a1kc05bpe.css';
import '../../css/e/enxy33bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="zm8_k8bqn"><path class="tw8conbhh wm-shadow"/><path class="tph-xsvjv wm-a"/><path class="ow39d0b3q wm-a"/><path class="a1kc05bpe wm-shadow"/><path class="enxy33bkx wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-sun"} {...others} />);
}

export default Component;
