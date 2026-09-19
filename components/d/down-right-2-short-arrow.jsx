import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1-aahsdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1-aahsdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:down-right-2-short-arrow"} {...others} />);
}

export default Component;
