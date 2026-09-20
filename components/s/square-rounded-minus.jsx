import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6246kx5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6246kx5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-rounded-minus"} {...others} />);
}

export default Component;
