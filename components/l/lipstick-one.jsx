import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/c/cf52fycgx.css';
import '../../css/u/u5_5228jl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCnMsPcDo"><g class="adexpl72i"><path class="cf52fycgx"/><path class="u5_5228jl"/></g></mask></defs><path mask="url(#SVGCnMsPcDo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lipstick-one"} {...others} />);
}

export default Component;
