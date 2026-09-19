import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v59xqacos.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="v59xqacos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fatarrowleft"} {...others} />);
}

export default Component;
