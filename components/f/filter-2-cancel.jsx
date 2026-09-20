import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ash0d0bka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ash0d0bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filter-2-cancel"} {...others} />);
}

export default Component;
