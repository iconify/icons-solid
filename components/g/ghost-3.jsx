import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf4fnjzzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf4fnjzzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ghost-3"} {...others} />);
}

export default Component;
