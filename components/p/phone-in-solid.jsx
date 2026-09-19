import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w88fuybtt.css';
import '../../css/q/qu318bjex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w88fuybtt"/><path class="qu318bjex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:phone-in-solid"} {...others} />);
}

export default Component;
