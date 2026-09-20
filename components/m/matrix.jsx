import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqz1v_bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqz1v_bkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:matrix"} {...others} />);
}

export default Component;
