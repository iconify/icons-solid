import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/b63-x3a4s.css';
import '../../css/s/s1dm0hsyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKExxydxk"><g class="rohhhzb0l"><rect class="b63-x3a4s"/><path class="s1dm0hsyw"/></g></mask></defs><path mask="url(#SVGKExxydxk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iwatch-one"} {...others} />);
}

export default Component;
