import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djv6i7b0m.css';
import '../../css/j/jf_6np9ji.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="djv6i7b0m"/><path class="jf_6np9ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-hotel"} {...others} />);
}

export default Component;
