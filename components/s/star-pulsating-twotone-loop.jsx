import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tba3nq.css';
import '../../css/b/bp45jb.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-3twqkg.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-t9c80f.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tba3nq"/><path class="bp45jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-pulsating-twotone-loop"} {...others} />);
}

export default Component;
