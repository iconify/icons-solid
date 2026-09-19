import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/k_wpiu-6r.css';
import '../../css/m/m4655yvtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1erRqbAS"><g class="rohhhzb0l"><path class="k_wpiu-6r"/><path class="m4655yvtx"/></g></mask></defs><path mask="url(#SVG1erRqbAS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:desk-lamp"} {...others} />);
}

export default Component;
