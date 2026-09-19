import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwkrfjg0w.css';
import '../../css/k/ks1061b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwkrfjg0w"/><path class="ks1061b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sofa-filled"} {...others} />);
}

export default Component;
