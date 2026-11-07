import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lineszbmd.css';
import '../../css/y/yp3yidbbi.css';
import '../../css/i/iuq7zmbfp.css';
import '../../css/u/udl63nbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lineszbmd"/><path class="yp3yidbbi"/><path class="iuq7zmbfp"/><path class="udl63nbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-bold"} {...others} />);
}

export default Component;
