import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9q-2bb0j.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="l9q-2bb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:serving"} {...others} />);
}

export default Component;
