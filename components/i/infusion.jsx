import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drz-q8q9v.css';
import '../../css/p/p-rbzybho.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtcYcYcZi"><g class="ufeehvblu"><path class="drz-q8q9v"/><path class="p-rbzybho"/></g></mask></defs><path mask="url(#SVGtcYcYcZi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:infusion"} {...others} />);
}

export default Component;
