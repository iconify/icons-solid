import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr1mw-09t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr1mw-09t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-1-fill-round"} {...others} />);
}

export default Component;
