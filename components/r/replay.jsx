import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk_7yjrcr.css';
import '../../css/g/gdzku6bfl.css';
import '../../css/a/a93spj2ll.css';
import '../../css/v/v_rh5jbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yk_7yjrcr"/><path class="gdzku6bfl"/><path class="a93spj2ll"/><path class="v_rh5jbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:replay"} {...others} />);
}

export default Component;
