import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/afg4837qm.css';
import '../../css/o/oxqb7fbfj.css';
import '../../css/j/jzuskz7tu.css';
import '../../css/y/y3zj-ab_z.css';
import '../../css/h/h3xwwxbtl.css';
import '../../css/l/ltlrs0b3n.css';
import '../../css/o/ocjmqg7-f.css';
import '../../css/f/fjli2k8zz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="afg4837qm"/><path class="oxqb7fbfj"/><path class="jzuskz7tu"/><path class="y3zj-ab_z"/><path class="h3xwwxbtl"/><path class="ltlrs0b3n"/><path class="ocjmqg7-f"/><path class="fjli2k8zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ke"} {...others} />);
}

export default Component;
