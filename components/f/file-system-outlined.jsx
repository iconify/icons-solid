import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5l-vby2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5l-vby2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:file-system-outlined"} {...others} />);
}

export default Component;
