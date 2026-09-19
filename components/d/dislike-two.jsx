import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uriljrv1a.css';
import '../../css/d/d6fs7qbes.css';
import '../../css/o/o0wztzken.css';
import '../../css/a/a653qxbrc.css';
import '../../css/n/np5xaumoc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uriljrv1a"/><path clip-rule="evenodd" class="d6fs7qbes"/><path class="o0wztzken"/><path clip-rule="evenodd" class="a653qxbrc"/><path class="np5xaumoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dislike-two"} {...others} />);
}

export default Component;
