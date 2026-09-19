import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7ieikbdu.css';
import '../../css/y/ypqutt2oo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i7ieikbdu"/><path class="ypqutt2oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tropical-storm-model-tracks"} {...others} />);
}

export default Component;
