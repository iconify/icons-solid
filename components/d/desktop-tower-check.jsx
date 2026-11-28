import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im8sh_2qg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im8sh_2qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:desktop-tower-check"} {...others} />);
}

export default Component;
