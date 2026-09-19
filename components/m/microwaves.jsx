import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_304tbab.css';
import '../../css/b/b7_599b-a.css';
import '../../css/l/l8afpfm9i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 5 34)" class="u_304tbab"/><path class="b7_599b-a"/><path class="l8afpfm9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:microwaves"} {...others} />);
}

export default Component;
