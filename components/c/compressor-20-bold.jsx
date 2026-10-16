import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj6o68bgt.css';
import '../../css/w/wcxlfdb-u.css';
import '../../css/b/bi2qc8bls.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cj6o68bgt"/><path class="wcxlfdb-u"/><path class="bi2qc8bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressor-20-bold"} {...others} />);
}

export default Component;
