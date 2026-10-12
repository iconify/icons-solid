import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-n28l9jj.css';
import '../../css/m/ml0uh1b4e.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o-n28l9jj"/><path class="ml0uh1b4e"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tag-plus-20-bold"} {...others} />);
}

export default Component;
