import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5jj_uqmr.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="s5jj_uqmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:euro-sign"} {...others} />);
}

export default Component;
