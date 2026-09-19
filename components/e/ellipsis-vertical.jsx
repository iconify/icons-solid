import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol7chu8pc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ol7chu8pc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:ellipsis-vertical"} {...others} />);
}

export default Component;
