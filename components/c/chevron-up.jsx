import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy2-8fbyk.css';
import '../../css/z/z0vd8mbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy2-8fbyk"/><path class="z0vd8mbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevron-up"} {...others} />);
}

export default Component;
