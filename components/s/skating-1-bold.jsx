import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmubjfrve.css';
import '../../css/o/oiva0jb0e.css';
import '../../css/g/ghoccmbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmubjfrve"/><path class="oiva0jb0e"/><path class="ghoccmbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skating-1-bold"} {...others} />);
}

export default Component;
