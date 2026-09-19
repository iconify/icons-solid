import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fsx1iv68d.css';
import '../../css/a/as4b8ybnt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGk42sHeYg"><g class="aql7dnt-u"><path class="fsx1iv68d"/><path class="as4b8ybnt"/></g></mask></defs><path mask="url(#SVGk42sHeYg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tomato"} {...others} />);
}

export default Component;
