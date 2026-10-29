import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh29g3brh.css';
import '../../css/p/ptubw66as.css';
import '../../css/v/v7xu-dc9e.css';
import '../../css/c/coehg6qda.css';
import '../../css/a/ao42cebqb.css';
import '../../css/c/cs5iafbcs.css';
import '../../css/y/ytcijvbbc.css';
import '../../css/u/ud6mkfbjx.css';
import '../../css/a/a99m_ybix.css';
import '../../css/g/gc7539bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh29g3brh wm-shadow"/><path class="ptubw66as wm-k"/><path class="v7xu-dc9e wm-k"/><path class="coehg6qda wm-k"/><path class="ao42cebqb wm-k"/><path class="cs5iafbcs wm-k"/><path class="wm-shine ytcijvbbc"/><path class="ud6mkfbjx wm-a"/><path class="a99m_ybix wm-a"/><path class="gc7539bkw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:text-cursor-input"} {...others} />);
}

export default Component;
