import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0e0bom_j.css';
import '../../css/r/r8s1uwb6a.css';
import '../../css/l/lqzg47eok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGJxnjcZw"><g class="ft5dv1b6b"><path class="x0e0bom_j"/><path class="r8s1uwb6a"/><path class="lqzg47eok"/></g></mask></defs><path mask="url(#SVGGJxnjcZw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:elevator"} {...others} />);
}

export default Component;
