import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu1o-cjme.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cu1o-cjme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-hi5"} {...others} />);
}

export default Component;
