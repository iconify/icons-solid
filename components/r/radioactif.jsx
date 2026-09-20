import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw4f8xb5j.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="iw4f8xb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:radioactif"} {...others} />);
}

export default Component;
