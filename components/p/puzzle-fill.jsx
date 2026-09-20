import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgmx5biec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgmx5biec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:puzzle-fill"} {...others} />);
}

export default Component;
