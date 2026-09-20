import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7v3kjbav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7v3kjbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:kitchenware-spatula-1-bold"} {...others} />);
}

export default Component;
