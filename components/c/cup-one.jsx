import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gpftqebpo.css';
import '../../css/z/zlayvnhvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG55NRi7Ba"><g class="aql7dnt-u"><path class="gpftqebpo"/><path class="zlayvnhvl"/></g></mask></defs><path mask="url(#SVG55NRi7Ba)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cup-one"} {...others} />);
}

export default Component;
