import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/o75u-cc0c.css';
import '../../css/e/e9d3hlh5n.css';
import '../../css/v/v-sv08b6n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhrnvfc4U"><g class="rohhhzb0l"><circle class="o75u-cc0c"/><rect transform="rotate(90 36.006 19.334)" class="e9d3hlh5n"/><rect transform="rotate(-180 36.006 29.852)" class="v-sv08b6n"/></g></mask></defs><path mask="url(#SVGhrnvfc4U)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:switch-one"} {...others} />);
}

export default Component;
