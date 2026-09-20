import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dn_21lbgf.css';
import '../../css/z/z2tc4pbon.css';
import '../../css/p/pb2lvebkq.css';
import '../../css/u/u5dj22b2w.css';
import '../../css/k/ke1ue7b1g.css';
import '../../css/y/y07-2ktyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dn_21lbgf"/><path class="z2tc4pbon"/><path class="pb2lvebkq"/><path class="u5dj22b2w"/><path class="ke1ue7b1g"/><path class="y07-2ktyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:in-love"} {...others} />);
}

export default Component;
