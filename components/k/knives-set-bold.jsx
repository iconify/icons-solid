import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4kld0byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4kld0byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:knives-set-bold"} {...others} />);
}

export default Component;
