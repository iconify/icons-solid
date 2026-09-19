import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g-g8_3lxs.css';
import '../../css/i/ioqq5abex.css';
import '../../css/f/fsoi-q3pn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzvgk7cVf"><g class="ufeehvblu"><path clip-rule="evenodd" class="g-g8_3lxs"/><path class="ioqq5abex"/><path class="fsoi-q3pn"/></g></mask></defs><path mask="url(#SVGzvgk7cVf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:toxins"} {...others} />);
}

export default Component;
