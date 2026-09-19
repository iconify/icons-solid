import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-uxhib_r.css';
import '../../css/v/vzjth9xec.css';
import '../../css/w/wcvu_0hwk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k-uxhib_r"/><path class="vzjth9xec"/><path class="wcvu_0hwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:quartz-watch"} {...others} />);
}

export default Component;
