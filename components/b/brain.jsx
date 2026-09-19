import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/k/ky9s8j_lj.css';
import '../../css/n/nrlaeggxi.css';
import '../../css/y/yf88pr0jd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvVYTQdqR"><g class="csw0kbbpv"><path class="ky9s8j_lj"/><path clip-rule="evenodd" class="nrlaeggxi"/><path class="yf88pr0jd"/></g></mask></defs><path mask="url(#SVGvVYTQdqR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:brain"} {...others} />);
}

export default Component;
