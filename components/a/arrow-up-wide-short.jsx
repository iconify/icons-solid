import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_2qg0fkn.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="j_2qg0fkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrow-up-wide-short"} {...others} />);
}

export default Component;
