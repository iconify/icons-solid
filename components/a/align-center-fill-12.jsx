import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6hnyjb8q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="v6hnyjb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:align-center-fill-12"} {...others} />);
}

export default Component;
