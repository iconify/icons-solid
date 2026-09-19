import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/amzbzxb8s.css';
import '../../css/i/itdrllbjs.css';
import '../../css/j/j2l4avb1z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqtZ0fjbt"><g class="rohhhzb0l"><path class="amzbzxb8s"/><path class="itdrllbjs"/><ellipse class="j2l4avb1z"/></g></mask></defs><path mask="url(#SVGqtZ0fjbt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:french-fries"} {...others} />);
}

export default Component;
