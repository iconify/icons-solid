import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxw6x99ms.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rxw6x99ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:skull-rock-outline"} {...others} />);
}

export default Component;
