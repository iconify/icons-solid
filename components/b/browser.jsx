import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc21hcbgh.css';
import '../../css/g/gis2ovb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hc21hcbgh"/><path clip-rule="evenodd" class="gis2ovb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:browser"} {...others} />);
}

export default Component;
