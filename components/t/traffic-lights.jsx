import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an__cwb5h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="an__cwb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:traffic-lights"} {...others} />);
}

export default Component;
