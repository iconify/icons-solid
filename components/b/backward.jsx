import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae2nkza4x.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};
const content = `<path class="ae2nkza4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:backward"} {...others} />);
}

export default Component;
