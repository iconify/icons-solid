import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd8yle12b.css';

const viewBox = {"width":1888,"height":1408};
const content = `<path class="pd8yle12b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:folder-open"} {...others} />);
}

export default Component;
