import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2czitb5i.css';
import '../../css/d/dkgiiobdd.css';
import '../../css/g/gw7ic4pth.css';
import '../../css/y/yyw4visub.css';
import '../../css/g/gkhalybct.css';
import '../../css/l/l5qz0u4sl.css';
import '../../css/y/y6wojcbob.css';
import '../../css/n/nm2ghob8j.css';
import '../../css/v/vyhb35bso.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGisG2xdrm" class="i2czitb5i"/></defs><use href="#SVGisG2xdrm"/><path class="dkgiiobdd"/><path class="gw7ic4pth"/><use href="#SVGisG2xdrm"/><path class="yyw4visub"/><path class="gkhalybct"/><path class="l5qz0u4sl"/><path class="y6wojcbob"/><path class="nm2ghob8j"/><path class="vyhb35bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:exploding-head"} {...others} />);
}

export default Component;
