import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrr9c8bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrr9c8bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-sketch-filled"} {...others} />);
}

export default Component;
