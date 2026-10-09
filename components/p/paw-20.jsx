import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjpr8ebst.css';
import '../../css/f/f_bvfu90l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cjpr8ebst"/><path class="f_bvfu90l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paw-20"} {...others} />);
}

export default Component;
