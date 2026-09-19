import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bhxj3vn6f.css';
import '../../css/b/bddlodbbs.css';
import '../../css/e/ekpxz8bow.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5BC7AebV"><g class="wwvp95byt"><path class="bhxj3vn6f"/><path class="bddlodbbs"/><path class="ekpxz8bow"/></g></mask></defs><path mask="url(#SVG5BC7AebV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:short-skirt"} {...others} />);
}

export default Component;
