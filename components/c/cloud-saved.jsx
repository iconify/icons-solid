import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zajvw9b4f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zajvw9b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:cloud-saved"} {...others} />);
}

export default Component;
