import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/tmevkm75x.css';
import '../../css/u/uwfr6-b9e.css';
import '../../css/z/z19bf84dj.css';
import '../../css/n/nql8tgo6e.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="tmevkm75x"/><path class="uwfr6-b9e"/><path class="z19bf84dj"/><path class="nql8tgo6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:dj"} {...others} />);
}

export default Component;
