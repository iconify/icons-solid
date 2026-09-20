import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti7n7f08l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ti7n7f08l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:volume-up"} {...others} />);
}

export default Component;
