import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a459j710d.css';
import '../../css/h/ho_24vbuy.css';
import '../../css/p/pwqcw0beo.css';
import '../../css/p/pee0w9b0l.css';
import '../../css/w/w2clp_a8v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiXz5fccH"><g class="rohhhzb0l"><rect class="a459j710d"/><path class="ho_24vbuy"/><circle class="pwqcw0beo"/><circle class="pee0w9b0l"/><path class="w2clp_a8v"/></g></mask></defs><path mask="url(#SVGiXz5fccH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gift-bag"} {...others} />);
}

export default Component;
