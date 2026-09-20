import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuvb_f4bz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuvb_f4bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:puddle"} {...others} />);
}

export default Component;
