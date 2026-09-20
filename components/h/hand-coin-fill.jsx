import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai7-fx85j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ai7-fx85j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hand-coin-fill"} {...others} />);
}

export default Component;
