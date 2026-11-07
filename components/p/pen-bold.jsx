import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t66hbfb2l.css';
import '../../css/b/bkakk0bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t66hbfb2l"/><path class="bkakk0bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-bold"} {...others} />);
}

export default Component;
