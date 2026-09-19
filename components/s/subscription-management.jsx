import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxgckcb1c.css';
import '../../css/w/w8tdd6b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxgckcb1c"/><path class="w8tdd6b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:subscription-management"} {...others} />);
}

export default Component;
