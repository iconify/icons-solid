import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alvduwk6p.css';
import '../../css/g/g7x2tg8pa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="alvduwk6p"/><path class="g7x2tg8pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:soroswap"} {...others} />);
}

export default Component;
