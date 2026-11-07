import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmxdroxwq.css';
import '../../css/g/gsoiz-rxf.css';
import '../../css/c/cuyok2bgh.css';
import '../../css/k/k8q6v-b7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nmxdroxwq"/><path clip-rule="evenodd" class="gsoiz-rxf"/><path class="cuyok2bgh"/><path class="k8q6v-b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-bold"} {...others} />);
}

export default Component;
