import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0apn84ov.css';
import '../../css/v/vku8ojb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0apn84ov"/><path class="vku8ojb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:caret-down-square"} {...others} />);
}

export default Component;
