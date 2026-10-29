import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk_1psu1o.css';
import '../../css/g/gx-lz3vja.css';
import '../../css/d/dj2mub87f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sk_1psu1o wm-a"/><path class="gx-lz3vja wm-k"/><path class="dj2mub87f wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dna"} {...others} />);
}

export default Component;
