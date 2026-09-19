import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvt8a1byh.css';
import '../../css/q/qfpw5-bub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvt8a1byh"/><path class="qfpw5-bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-brightness-half"} {...others} />);
}

export default Component;
