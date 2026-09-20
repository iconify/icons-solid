import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gke6lpbek.css';
import '../../css/n/n37up1lms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="gke6lpbek"/><path class="n37up1lms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elastic-logstash-logo"} {...others} />);
}

export default Component;
