import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np3fkg3rl.css';
import '../../css/t/tht3gpbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="np3fkg3rl"/><path class="tht3gpbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:phone-call-fill"} {...others} />);
}

export default Component;
