import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd_z49b8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jd_z49b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chain-broken-20"} {...others} />);
}

export default Component;
