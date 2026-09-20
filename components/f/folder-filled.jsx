import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/j/jvs9gf.css';
import '../../css/t/t59ijc.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew jvs9gf"/><path class="iw1iew t59ijc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-filled"} {...others} />);
}

export default Component;
