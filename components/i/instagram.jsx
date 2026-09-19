import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smmhmy9uy.css';

const viewBox = {"width":740,"height":850};
const content = `<path class="smmhmy9uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:instagram"} {...others} />);
}

export default Component;
