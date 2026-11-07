import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7y90fksk.css';
import '../../css/d/dkbffkbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r7y90fksk"/><path class="dkbffkbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-right-open-bold"} {...others} />);
}

export default Component;
