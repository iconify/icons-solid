import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/g/go_3kbx3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="go_3kbx3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:circle-three"} {...others} />);
}

export default Component;
