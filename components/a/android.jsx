import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd0l9kb6p.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="gd0l9kb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:android"} {...others} />);
}

export default Component;
