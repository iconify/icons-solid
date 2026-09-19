import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arj7difgh.css';
import '../../css/b/bg4nr-b2f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqZE6mclN"><g class="ft5dv1b6b"><path class="arj7difgh"/><path clip-rule="evenodd" class="bg4nr-b2f"/></g></mask></defs><path mask="url(#SVGqZE6mclN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:more-three"} {...others} />);
}

export default Component;
