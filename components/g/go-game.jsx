import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9-lq3jzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9-lq3jzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:go-game"} {...others} />);
}

export default Component;
