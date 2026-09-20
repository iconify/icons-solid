import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf9w5nbmj.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="gf9w5nbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:teahouse-11"} {...others} />);
}

export default Component;
