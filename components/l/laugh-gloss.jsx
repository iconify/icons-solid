import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6fl38b4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6fl38b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laugh-gloss"} {...others} />);
}

export default Component;
