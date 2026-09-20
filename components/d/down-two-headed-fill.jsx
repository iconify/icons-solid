import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smc5l5zng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smc5l5zng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:down-two-headed-fill"} {...others} />);
}

export default Component;
