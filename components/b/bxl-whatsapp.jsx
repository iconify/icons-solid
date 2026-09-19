import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn2rljbco.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mn2rljbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-whatsapp"} {...others} />);
}

export default Component;
