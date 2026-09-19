import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx5qw-f6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx5qw-f6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:bell-off"} {...others} />);
}

export default Component;
