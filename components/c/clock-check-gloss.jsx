import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-03f5vrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-03f5vrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check-gloss"} {...others} />);
}

export default Component;
