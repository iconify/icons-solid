import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgu1fkbbl.css';
import '../../css/k/k2un3-b6v.css';
import '../../css/c/cly6unwwo.css';
import '../../css/n/nd2sdrbon.css';
import '../../css/i/ierrqhb0t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgu1fkbbl"/><path class="k2un3-b6v"/><path class="cly6unwwo"/><path class="nd2sdrbon"/><path class="ierrqhb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamx-light"} {...others} />);
}

export default Component;
