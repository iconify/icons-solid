import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v42ex0_-k.css';
import '../../css/e/epcgjnb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v42ex0_-k"/><path class="epcgjnb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:phone-outgoing"} {...others} />);
}

export default Component;
