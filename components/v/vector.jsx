import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uswlc2bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uswlc2bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:vector"} {...others} />);
}

export default Component;
