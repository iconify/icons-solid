import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z05zhqg7i.css';
import '../../css/d/dd56kjwfa.css';
import '../../css/s/sqoyz0-mw.css';
import '../../css/f/f2vtc-bmn.css';
import '../../css/w/wjt24qbvl.css';
import '../../css/u/uwgsblblm.css';
import '../../css/b/boj93zblk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z05zhqg7i"/><path class="dd56kjwfa"/><path class="sqoyz0-mw"/><path class="f2vtc-bmn"/><path class="wjt24qbvl"/><path class="uwgsblblm"/><path class="boj93zblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cloud-file"} {...others} />);
}

export default Component;
