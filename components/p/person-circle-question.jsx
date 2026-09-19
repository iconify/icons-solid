import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1a-g7buz.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="h1a-g7buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:person-circle-question"} {...others} />);
}

export default Component;
