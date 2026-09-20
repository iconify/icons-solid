import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlr1md4hf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlr1md4hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:list-ui-alt"} {...others} />);
}

export default Component;
