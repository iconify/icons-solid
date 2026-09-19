import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5_1g1oqt.css';
import '../../css/i/inrili5tt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5_1g1oqt"/><path class="inrili5tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:timer"} {...others} />);
}

export default Component;
