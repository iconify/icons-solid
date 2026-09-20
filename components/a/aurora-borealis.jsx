import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kok2lcctq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kok2lcctq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:aurora-borealis"} {...others} />);
}

export default Component;
