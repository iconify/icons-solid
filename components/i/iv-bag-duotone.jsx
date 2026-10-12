import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccn4zactj.css';
import '../../css/b/bhk8wfb4o.css';
import '../../css/c/cb49zqzuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ccn4zactj"/><path class="bhk8wfb4o"/><path class="cb49zqzuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:iv-bag-duotone"} {...others} />);
}

export default Component;
