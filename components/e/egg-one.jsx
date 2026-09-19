import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/hcd031bpd.css';
import '../../css/k/kdubn7zbs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeKtK9bpq"><g class="rohhhzb0l"><path class="hcd031bpd"/><path class="kdubn7zbs"/></g></mask></defs><path mask="url(#SVGeKtK9bpq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:egg-one"} {...others} />);
}

export default Component;
