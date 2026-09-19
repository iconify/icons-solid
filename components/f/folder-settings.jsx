import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/l/lrxuxtb2u.css';
import '../../css/j/jk98jeb-y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbgNCvbRH"><g class="rohhhzb0l"><path class="zbocpbbaf"/><circle class="lrxuxtb2u"/><path class="jk98jeb-y"/></g></mask></defs><path mask="url(#SVGbgNCvbRH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-settings"} {...others} />);
}

export default Component;
