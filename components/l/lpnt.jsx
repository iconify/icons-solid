import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5xz9zb8a.css';
import '../../css/q/q2qrt1hqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5xz9zb8a"/><path clip-rule="evenodd" class="q2qrt1hqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lpnt"} {...others} />);
}

export default Component;
