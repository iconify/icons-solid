import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag883ssbj.css';
import '../../css/q/qumoqc5xm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ag883ssbj"/><path class="qumoqc5xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-rounded-bold-duotone"} {...others} />);
}

export default Component;
