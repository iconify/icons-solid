import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o991c4n6k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="o991c4n6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:yugabytedb-wordmark"} {...others} />);
}

export default Component;
