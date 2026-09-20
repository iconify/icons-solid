import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0q5d6yma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0q5d6yma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flash-off-bold"} {...others} />);
}

export default Component;
