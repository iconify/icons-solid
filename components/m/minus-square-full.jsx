import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjj4o5bfd.css';
import '../../css/z/zuoex-dnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjj4o5bfd"/><path class="zuoex-dnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:minus-square-full"} {...others} />);
}

export default Component;
