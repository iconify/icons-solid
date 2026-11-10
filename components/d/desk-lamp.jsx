import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1ra9z4op.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1ra9z4op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:desk-lamp"} {...others} />);
}

export default Component;
