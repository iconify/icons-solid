import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx1u3jb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mx1u3jb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:screen-share"} {...others} />);
}

export default Component;
