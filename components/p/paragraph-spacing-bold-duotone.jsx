import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/agxbu6-zp.css';
import '../../css/x/xws3dub0q.css';
import '../../css/q/q6lfj_b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="agxbu6-zp"/><path class="xws3dub0q"/></g><path class="q6lfj_b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-bold-duotone"} {...others} />);
}

export default Component;
