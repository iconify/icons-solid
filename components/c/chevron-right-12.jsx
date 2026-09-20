import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_ruc1bdt.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="n_ruc1bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-right-12"} {...others} />);
}

export default Component;
