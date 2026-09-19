import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf9-5_bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf9-5_bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:appletv-gen2-remote"} {...others} />);
}

export default Component;
