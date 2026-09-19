import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjc25wbon.css';
import '../../css/u/uoc0cdb_s.css';
import '../../css/b/bdzeb9y7m.css';
import '../../css/n/nb5xt0b0j.css';
import '../../css/l/lf__u2qmg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wjc25wbon"/><path class="uoc0cdb_s"/><path class="bdzeb9y7m"/><path class="nb5xt0b0j"/><path class="lf__u2qmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pickup-truck"} {...others} />);
}

export default Component;
