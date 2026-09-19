import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/s/s_3f_k18w.css';
import '../../css/z/zsls1eb-j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLixX0dQA"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="s_3f_k18w"/><path class="zsls1eb-j"/></g></mask></defs><path mask="url(#SVGLixX0dQA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:jewelry"} {...others} />);
}

export default Component;
