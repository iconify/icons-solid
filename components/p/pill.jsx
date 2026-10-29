import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji5e_cc1a.css';
import '../../css/h/h1ei_9byu.css';
import '../../css/k/kh6xzbb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ji5e_cc1a"/><path class="h1ei_9byu"/><path class="kh6xzbb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pill"} {...others} />);
}

export default Component;
