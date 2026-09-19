import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nc-cps94t.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/c/cyfkkj1ox.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXuDXNdsR"><g class="rohhhzb0l"><rect class="nc-cps94t"/><ellipse class="hsmgu8r4l"/><path class="cyfkkj1ox"/></g></mask></defs><path mask="url(#SVGXuDXNdsR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pumpkin"} {...others} />);
}

export default Component;
