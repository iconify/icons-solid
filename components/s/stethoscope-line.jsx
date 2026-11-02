import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tql0zqbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tql0zqbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:stethoscope-line"} {...others} />);
}

export default Component;
