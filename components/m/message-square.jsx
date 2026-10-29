import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5t13ub5b.css';
import '../../css/r/ra85-tbry.css';
import '../../css/h/h1grhgbhf.css';
import '../../css/c/cgqmxpbhk.css';
import '../../css/z/zbmxucbco.css';
import '../../css/a/a-ryaqb4z.css';
import '../../css/k/kqvsy0bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5t13ub5b wm-shadow"/><path class="ra85-tbry wm-k"/><path class="h1grhgbhf wm-k"/><path class="cgqmxpbhk wm-k"/><path class="wm-k zbmxucbco"/><path class="a-ryaqb4z wm-k"/><path class="kqvsy0bhb wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:message-square"} {...others} />);
}

export default Component;
