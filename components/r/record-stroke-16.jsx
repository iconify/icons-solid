import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otv6zerrs.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="otv6zerrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:record-stroke-16"} {...others} />);
}

export default Component;
