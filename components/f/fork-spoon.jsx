import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ualx4gbii.css';
import '../../css/b/bi2kk0fuu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDt0bN0Ix"><g class="aql7dnt-u"><path class="ualx4gbii"/><path class="bi2kk0fuu"/></g></mask></defs><path mask="url(#SVGDt0bN0Ix)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fork-spoon"} {...others} />);
}

export default Component;
