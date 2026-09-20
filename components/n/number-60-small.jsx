import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w47rdybzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w47rdybzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-60-small"} {...others} />);
}

export default Component;
