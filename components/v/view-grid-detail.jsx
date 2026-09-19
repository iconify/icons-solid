import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/j/jsut5mffz.css';
import '../../css/u/uwvtf0b4x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6syFO49E"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="jsut5mffz"/><path class="uwvtf0b4x"/></g></mask></defs><path mask="url(#SVG6syFO49E)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:view-grid-detail"} {...others} />);
}

export default Component;
