import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/n/nqk0mrsuo.css';
import '../../css/n/n16lh5xxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8kN8GcKp"><g class="adexpl72i"><path class="nqk0mrsuo"/><path class="n16lh5xxw"/></g></mask></defs><path mask="url(#SVG8kN8GcKp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:helmet-one"} {...others} />);
}

export default Component;
