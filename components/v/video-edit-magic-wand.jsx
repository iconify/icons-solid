import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2i62fjha.css';
import '../../css/i/id8f9abqm.css';
import '../../css/j/jjv0fqrvj.css';
import '../../css/b/b4-596b-d.css';
import '../../css/x/xckdgq80n.css';
import '../../css/i/iqwy2ybmz.css';
import '../../css/g/g3l3768du.css';
import '../../css/m/m0vrubc8z.css';
import '../../css/t/t48dg0r8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2i62fjha"/><path class="id8f9abqm"/><path class="jjv0fqrvj"/><path class="b4-596b-d"/><path class="xckdgq80n"/><path class="iqwy2ybmz"/><path class="g3l3768du"/><path class="m0vrubc8z"/><path class="t48dg0r8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-edit-magic-wand"} {...others} />);
}

export default Component;
