import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/v/vaasrco9m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTNFrde9x"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="vaasrco9m"/></g></mask></defs><path mask="url(#SVGTNFrde9x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:alignment-bottom-center"} {...others} />);
}

export default Component;
