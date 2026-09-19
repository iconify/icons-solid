import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce5j2rbzq.css';

const viewBox = {"width":717,"height":664};
const content = `<path class="ce5j2rbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:volumeup"} {...others} />);
}

export default Component;
