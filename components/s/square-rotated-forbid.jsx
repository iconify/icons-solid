import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g74y0wb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g74y0wb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rotated-forbid"} {...others} />);
}

export default Component;
