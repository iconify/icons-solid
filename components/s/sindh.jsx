import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ywlqk53zr.css';
import '../../css/r/rucmhjwzd.css';
import '../../css/d/d_4acsbfb.css';
import '../../css/y/y3jzabcfi.css';
import '../../css/g/g1vz30__a.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ywlqk53zr"/><ellipse class="rucmhjwzd"/><ellipse class="d_4acsbfb"/><path class="y3jzabcfi"/><path class="g1vz30__a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sindh"} {...others} />);
}

export default Component;
