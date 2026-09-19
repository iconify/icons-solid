import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq-nchcxv.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/m/mukg8ab-m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mq-nchcxv"/><circle class="dlp7nstpk"/><path class="mukg8ab-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:object-storage-alt"} {...others} />);
}

export default Component;
