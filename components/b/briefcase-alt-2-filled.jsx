import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vamcxub9f.css';
import '../../css/i/i7a-gbc6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vamcxub9f"/><path class="i7a-gbc6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:briefcase-alt-2-filled"} {...others} />);
}

export default Component;
