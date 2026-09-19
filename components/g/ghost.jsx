import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a8rml3bpr.css';
import '../../css/a/am3i6jbjw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY0EtEeTz"><g class="ufeehvblu"><path class="a8rml3bpr"/><path class="am3i6jbjw"/></g></mask></defs><path mask="url(#SVGY0EtEeTz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ghost"} {...others} />);
}

export default Component;
