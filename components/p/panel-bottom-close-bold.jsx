import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fchi9zv9c.css';
import '../../css/k/kvxqcabet.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fchi9zv9c"/><path class="kvxqcabet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-close-bold"} {...others} />);
}

export default Component;
