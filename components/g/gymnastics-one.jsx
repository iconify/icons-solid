import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/p/p9pavjj4d.css';
import '../../css/l/ln6f3q98l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvq32Ydak"><g class="cgga7abld"><path class="p9pavjj4d"/><path class="ln6f3q98l"/></g></mask></defs><path mask="url(#SVGvq32Ydak)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gymnastics-one"} {...others} />);
}

export default Component;
