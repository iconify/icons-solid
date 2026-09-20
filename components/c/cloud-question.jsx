import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7e8svs6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7e8svs6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:cloud-question"} {...others} />);
}

export default Component;
