import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lpaon527v.css';
import '../../css/c/c6kjuqnsb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh7XlAdDD"><g class="rohhhzb0l"><path class="lpaon527v"/><rect class="c6kjuqnsb"/></g></mask></defs><path mask="url(#SVGh7XlAdDD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:screenshot-one"} {...others} />);
}

export default Component;
