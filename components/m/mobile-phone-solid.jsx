import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnm4t1t0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gnm4t1t0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:mobile-phone-solid"} {...others} />);
}

export default Component;
