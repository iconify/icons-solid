import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/usswkqb0n.css';
import '../../css/s/skzye-b9q.css';
import '../../css/n/n090fxd9z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbJxJ9dBq"><g class="v3_i3wktz"><path class="usswkqb0n"/><path class="skzye-b9q"/><path class="n090fxd9z"/></g></mask></defs><path mask="url(#SVGbJxJ9dBq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:collect-laptop"} {...others} />);
}

export default Component;
