import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc-nt5a3x.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="sc-nt5a3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:check"} {...others} />);
}

export default Component;
