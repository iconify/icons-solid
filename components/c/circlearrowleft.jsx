import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt5xi-btt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xt5xi-btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlearrowleft"} {...others} />);
}

export default Component;
