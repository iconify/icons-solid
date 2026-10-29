import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z275h0bix.css';
import '../../css/s/sh981rb_o.css';
import '../../css/s/smxyi4bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z275h0bix"/><path class="sh981rb_o wm-a"/><path class="smxyi4bje wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kite"} {...others} />);
}

export default Component;
