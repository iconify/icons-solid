import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/ll720cc5b.css';
import '../../css/k/keqfhpopx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8H5f3cpk"><g class="v3_i3wktz"><rect class="ll720cc5b"/><path class="keqfhpopx"/></g></mask></defs><path mask="url(#SVG8H5f3cpk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:terminal"} {...others} />);
}

export default Component;
