import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkmn4cfof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkmn4cfof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rupee-octagon-solid"} {...others} />);
}

export default Component;
