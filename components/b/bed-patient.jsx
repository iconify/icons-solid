import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0n8e72ao.css';
import '../../css/y/yk0g4yont.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0n8e72ao"/><path class="yk0g4yont"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bed-patient"} {...others} />);
}

export default Component;
