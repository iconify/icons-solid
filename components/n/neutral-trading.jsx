import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnd46w4ky.css';
import '../../css/b/b1ifpmj1n.css';
import '../../css/f/fgae8y46x.css';
import '../../css/c/cx8dh4bna.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nnd46w4ky"><path class="b1ifpmj1n"/><path class="fgae8y46x"/></g><path class="cx8dh4bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:neutral-trading"} {...others} />);
}

export default Component;
