import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gac48jb7z.css';
import '../../css/n/n_m9vgi5i.css';
import '../../css/r/r48c3wd-j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gac48jb7z"/><path class="n_m9vgi5i"/><path class="r48c3wd-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:iot-platform"} {...others} />);
}

export default Component;
