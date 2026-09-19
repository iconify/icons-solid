import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1_swcb_o.css';
import '../../css/p/p47c9-mcc.css';
import '../../css/j/jqjqplo7i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLqEOxaPY"><g class="v1_swcb_o"><path class="p47c9-mcc"/><path class="jqjqplo7i"/></g></mask></defs><path mask="url(#SVGLqEOxaPY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:avocado"} {...others} />);
}

export default Component;
