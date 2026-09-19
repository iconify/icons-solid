import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq-nchcxv.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/q/qe3jhfb4u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mq-nchcxv"/><circle class="dlp7nstpk"/><path class="qe3jhfb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:object-storage"} {...others} />);
}

export default Component;
