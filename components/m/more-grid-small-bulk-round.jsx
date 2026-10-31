import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtvf1bb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xtvf1bb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:more-grid-small-bulk-round"} {...others} />);
}

export default Component;
