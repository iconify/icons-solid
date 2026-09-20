import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkg07ratc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pkg07ratc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:briefcase-detailed-fill"} {...others} />);
}

export default Component;
