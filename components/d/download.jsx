import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uswc0fr3j.css';
import '../../css/n/nu8i0-bfz.css';
import '../../css/d/dqe_68bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uswc0fr3j wm-k"/><path class="nu8i0-bfz wm-a"/><path class="dqe_68bhs wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:download"} {...others} />);
}

export default Component;
