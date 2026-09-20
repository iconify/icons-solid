import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_u2orb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_u2orb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:checklist-fill"} {...others} />);
}

export default Component;
