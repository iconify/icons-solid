import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4dwnrrhs.css';
import '../../css/j/jvhewq0dz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4dwnrrhs"/><path class="jvhewq0dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud"} {...others} />);
}

export default Component;
