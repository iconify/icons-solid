import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhc-2qift.css';
import '../../css/h/h86hhf6yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhc-2qift"/><path class="h86hhf6yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:braces"} {...others} />);
}

export default Component;
