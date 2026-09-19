import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbl1pdi-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mbl1pdi-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:time-back"} {...others} />);
}

export default Component;
