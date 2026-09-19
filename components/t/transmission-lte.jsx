import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvmivbb5a.css';
import '../../css/i/ih5xe3bid.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvmivbb5a"/><path class="ih5xe3bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:transmission-lte"} {...others} />);
}

export default Component;
