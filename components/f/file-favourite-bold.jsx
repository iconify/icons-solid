import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kye07wy2c.css';
import '../../css/b/bz70mjb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kye07wy2c"/><path clip-rule="evenodd" class="bz70mjb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-favourite-bold"} {...others} />);
}

export default Component;
