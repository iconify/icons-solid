import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idxndm8dn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idxndm8dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:exclamation-triangle"} {...others} />);
}

export default Component;
