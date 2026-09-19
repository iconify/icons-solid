import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koqv1mtcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="koqv1mtcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sun-set"} {...others} />);
}

export default Component;
