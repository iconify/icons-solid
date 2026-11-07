import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwn-x6e3b.css';
import '../../css/k/k9cm14b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwn-x6e3b"/><path class="k9cm14b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-minimalistic-bold"} {...others} />);
}

export default Component;
