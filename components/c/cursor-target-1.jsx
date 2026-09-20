import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tys5xt2qf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tys5xt2qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cursor-target-1"} {...others} />);
}

export default Component;
