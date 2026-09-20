import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvlhzvb1u.css';
import '../../css/n/ngozc736n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hvlhzvb1u"/><path clip-rule="evenodd" class="ngozc736n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bag-minus-solid"} {...others} />);
}

export default Component;
