import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av9tczb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av9tczb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-justify"} {...others} />);
}

export default Component;
