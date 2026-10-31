import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uymd6cc2a.css';
import '../../css/z/zlb4ypb7t.css';
import '../../css/n/ncdgvlbmv.css';
import '../../css/y/yytdjbbtn.css';
import '../../css/s/s2n-libcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uymd6cc2a wm-shadow"/><path class="zlb4ypb7t"/><path class="ncdgvlbmv"/><path class="yytdjbbtn"/><path class="s2n-libcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bug"} {...others} />);
}

export default Component;
