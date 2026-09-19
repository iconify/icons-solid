import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/se8cn43la.css';
import '../../css/h/hylm6cbcz.css';
import '../../css/x/x-smzibff.css';
import '../../css/n/noycm4iks.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="se8cn43la"/><path class="hylm6cbcz"/><path class="x-smzibff"/><path class="noycm4iks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cd"} {...others} />);
}

export default Component;
