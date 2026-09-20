import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f68q2q.css';
import '../../css/b/bp45jb.css';
import '../../css/d/d-3twqkg.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-t9c80f.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f68q2q"/><path class="bp45jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-pulsating-filled-loop"} {...others} />);
}

export default Component;
