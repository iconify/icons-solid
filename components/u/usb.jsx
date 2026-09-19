import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l67u6pbze.css';
import '../../css/g/gnikse-du.css';
import '../../css/d/d866wubif.css';
import '../../css/e/eux_t-bma.css';
import '../../css/l/lf3w93b7q.css';
import '../../css/n/nz1n2tb3i.css';
import '../../css/i/i968ybbto.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l67u6pbze"/><path class="gnikse-du"/><path class="d866wubif"/><path class="eux_t-bma"/><path class="lf3w93b7q"/><path class="nz1n2tb3i"/><path class="i968ybbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:usb"} {...others} />);
}

export default Component;
