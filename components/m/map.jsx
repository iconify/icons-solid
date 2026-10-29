import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkcjtgbqv.css';
import '../../css/s/s9b9x4b1t.css';
import '../../css/v/vysl2zzjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkcjtgbqv wm-k"/><path class="s9b9x4b1t wm-a"/><path class="vysl2zzjq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:map"} {...others} />);
}

export default Component;
