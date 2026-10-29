import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyzyv9lqb.css';
import '../../css/p/pefcugrti.css';
import '../../css/l/lt1oixs7c.css';
import '../../css/c/c_tiat4ia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyzyv9lqb wm-k"/><path class="pefcugrti wm-a"/><path class="lt1oixs7c wm-a"/><path class="c_tiat4ia wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calculator"} {...others} />);
}

export default Component;
