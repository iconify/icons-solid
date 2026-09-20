import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h23tj7btf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h23tj7btf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rollercoaster"} {...others} />);
}

export default Component;
