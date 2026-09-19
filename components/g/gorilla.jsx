import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvcsb--1t.css';
import '../../css/w/w1is9sbav.css';
import '../../css/d/dm37clheh.css';
import '../../css/n/n_kfuxehi.css';
import '../../css/n/nuz_6ac6s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gvcsb--1t"/><path class="w1is9sbav"/><path class="dm37clheh"/><path class="n_kfuxehi"/><path class="nuz_6ac6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:gorilla"} {...others} />);
}

export default Component;
