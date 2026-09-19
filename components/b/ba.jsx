import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/szyzabcia.css';
import '../../css/x/xs42h82yl.css';
import '../../css/r/rk6ey_39w.css';
import '../../css/g/gddoymk0q.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="szyzabcia"/><path class="xs42h82yl"/><path class="rk6ey_39w"/><path class="gddoymk0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ba"} {...others} />);
}

export default Component;
