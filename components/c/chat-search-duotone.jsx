import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gojqxob8u.css';
import '../../css/w/wegovcbtf.css';
import '../../css/x/x2xnvjbkm.css';
import '../../css/z/z3e5vlvla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gojqxob8u"/><path class="wegovcbtf"/><circle class="x2xnvjbkm"/><path class="z3e5vlvla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-search-duotone"} {...others} />);
}

export default Component;
