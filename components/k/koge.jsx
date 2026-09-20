import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3-5_c46r.css';
import '../../css/c/clcnrxbew.css';
import '../../css/k/kihjjsb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3-5_c46r"/><path class="clcnrxbew"/><path class="kihjjsb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:koge"} {...others} />);
}

export default Component;
