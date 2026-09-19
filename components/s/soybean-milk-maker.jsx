import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vrz737vqq.css';
import '../../css/i/ij0vghbae.css';
import '../../css/n/n4ia32fbj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY0rTKdzA"><g class="aql7dnt-u"><path class="vrz737vqq"/><path class="ij0vghbae"/><path class="n4ia32fbj"/></g></mask></defs><path mask="url(#SVGY0rTKdzA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:soybean-milk-maker"} {...others} />);
}

export default Component;
