import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynpsrlbdk.css';
import '../../css/u/umcjjfb3i.css';
import '../../css/e/evrpsqb4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynpsrlbdk"/><path class="umcjjfb3i"/><path class="evrpsqb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:signpost"} {...others} />);
}

export default Component;
