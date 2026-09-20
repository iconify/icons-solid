import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf4gv2feu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mf4gv2feu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bag-carry-on-check"} {...others} />);
}

export default Component;
