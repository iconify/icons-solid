import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/w/wao0dvbdb.css';
import '../../css/g/g-h11i9wd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="wao0dvbdb"/><path class="g-h11i9wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-audio-20-bold"} {...others} />);
}

export default Component;
