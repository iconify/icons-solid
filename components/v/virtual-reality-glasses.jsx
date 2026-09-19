import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha1kkmb1c.css';
import '../../css/s/svdi4hd7i.css';
import '../../css/h/h9ku_5-7e.css';
import '../../css/f/f6ry3nbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2qMKLc9C"><g class="ft5dv1b6b"><path class="ha1kkmb1c"/><path class="svdi4hd7i"/><path clip-rule="evenodd" class="h9ku_5-7e"/><path class="f6ry3nbeq"/></g></mask></defs><path mask="url(#SVG2qMKLc9C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:virtual-reality-glasses"} {...others} />);
}

export default Component;
