import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g995gab3y.css';
import '../../css/p/pkbervbtf.css';
import '../../css/s/s46jxnbyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdoqifdjy"><g class="rohhhzb0l"><path class="g995gab3y"/><path class="pkbervbtf"/><circle transform="rotate(-180 10 11)" class="s46jxnbyw"/></g></mask></defs><path mask="url(#SVGdoqifdjy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:s-turn-up"} {...others} />);
}

export default Component;
