import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/r/r0z5tzrki.css';
import '../../css/p/pe7185b_e.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/u/u9ystxbgf.css';
import '../../css/k/kkbh_3gch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="r0z5tzrki"/><path class="pe7185b_e"/><path class="crcwzxbsf"/><path class="u9ystxbgf"/><path class="kkbh_3gch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-smile-7"} {...others} />);
}

export default Component;
