import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzwywtzpa.css';
import '../../css/x/xvq7pg0gd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dzwywtzpa"/><path class="xvq7pg0gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:managed-solutions"} {...others} />);
}

export default Component;
