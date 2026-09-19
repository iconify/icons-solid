import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/e/estdtg-8h.css';
import '../../css/m/m8xtvw9bh.css';
import '../../css/q/qrkttdbdf.css';
import '../../css/d/dnb9si4ds.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu54fQdIq"><g class="gopnm44um"><path class="estdtg-8h"/><path class="m8xtvw9bh"/><path class="qrkttdbdf"/><path class="dnb9si4ds"/></g></mask></defs><path mask="url(#SVGu54fQdIq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:prison"} {...others} />);
}

export default Component;
