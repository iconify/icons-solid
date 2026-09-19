import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/o/obvwy2but.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGonWILd0q"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="obvwy2but"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVGonWILd0q)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-bottom"} {...others} />);
}

export default Component;
