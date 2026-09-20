import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my3unjbkn.css';
import '../../css/y/y8ai33b1b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="my3unjbkn"/><path class="y8ai33b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:cash"} {...others} />);
}

export default Component;
