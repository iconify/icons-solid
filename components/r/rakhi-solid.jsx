import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlz4gzoop.css';
import '../../css/b/b45ce9wja.css';
import '../../css/n/njgrfi92d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rlz4gzoop"/><path class="b45ce9wja wm-a"/><path class="njgrfi92d wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rakhi-solid"} {...others} />);
}

export default Component;
