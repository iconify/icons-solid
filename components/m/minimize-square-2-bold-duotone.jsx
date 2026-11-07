import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/g_663sbec.css';
import '../../css/s/sgottpb5m.css';
import '../../css/b/b4req-b9i.css';
import '../../css/p/pwjtuabvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="g_663sbec"/><path class="sgottpb5m"/><path class="b4req-b9i"/><path class="pwjtuabvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-2-bold-duotone"} {...others} />);
}

export default Component;
