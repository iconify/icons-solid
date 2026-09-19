import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eref7llez.css';
import '../../css/b/bxv5csb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eref7llez"/><path class="bxv5csb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chevrons-right"} {...others} />);
}

export default Component;
