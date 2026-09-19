import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qo_6ijmqf.css';
import '../../css/p/pic726iix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qo_6ijmqf"/><path class="pic726iix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:milk"} {...others} />);
}

export default Component;
