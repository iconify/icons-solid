import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g21x4li4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g21x4li4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-palm-round"} {...others} />);
}

export default Component;
