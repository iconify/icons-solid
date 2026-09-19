import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icho3y_ph.css';
import '../../css/m/mthptgvbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="icho3y_ph"/><path clip-rule="evenodd" class="mthptgvbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:battery-most-outline"} {...others} />);
}

export default Component;
