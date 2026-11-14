import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iefp4vbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iefp4vbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bluetooth-searching"} {...others} />);
}

export default Component;
