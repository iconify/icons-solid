import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt4xytbyt.css';
import '../../css/r/r0k-ltjjw.css';
import '../../css/d/dz--kkbng.css';
import '../../css/k/k40zmxb3r.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="tt4xytbyt"/><path class="r0k-ltjjw"/><path class="dz--kkbng"/><path class="k40zmxb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:gambia"} {...others} />);
}

export default Component;
