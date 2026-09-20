import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycarj_sir.css';
import '../../css/d/d2npymh2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycarj_sir"/><path class="d2npymh2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ethereum-logo"} {...others} />);
}

export default Component;
