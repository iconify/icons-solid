import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnyw7hb_i.css';
import '../../css/o/opjoz-b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bnyw7hb_i"/><path class="opjoz-b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vector-square"} {...others} />);
}

export default Component;
