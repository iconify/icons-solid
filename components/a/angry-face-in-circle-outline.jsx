import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlbbljj-k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mlbbljj-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:angry-face-in-circle-outline"} {...others} />);
}

export default Component;
