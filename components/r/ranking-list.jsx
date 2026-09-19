import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pfvzz0gys.css';
import '../../css/b/b0ef3ebmi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmiXgscJA"><g class="rohhhzb0l"><path class="pfvzz0gys"/><path class="b0ef3ebmi"/></g></mask></defs><path mask="url(#SVGmiXgscJA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ranking-list"} {...others} />);
}

export default Component;
