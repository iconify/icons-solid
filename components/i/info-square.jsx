import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mme__qbhi.css';
import '../../css/l/l9s2l9b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mme__qbhi"/><path class="l9s2l9b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:info-square"} {...others} />);
}

export default Component;
