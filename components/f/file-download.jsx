import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppzu5_91m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ppzu5_91m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:file-download"} {...others} />);
}

export default Component;
