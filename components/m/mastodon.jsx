import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxxoc1biv.css';
import '../../css/i/i2771o-vm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/oqc87sf7z.css';
import '../../css/t/t4swahbuy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wxxoc1biv"/><path class="i2771o-vm"/><g class="jn8qy4bru"><path class="oqc87sf7z"/><path class="t4swahbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mastodon"} {...others} />);
}

export default Component;
