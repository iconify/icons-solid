import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1xfxt6no.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="j1xfxt6no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:arrows-maximize"} {...others} />);
}

export default Component;
