import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/o/o8x35cc1s.css';
import '../../css/j/jvsjkqbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyb2ZGe4D"><g class="rohhhzb0l"><path class="zbocpbbaf"/><path class="o8x35cc1s"/><path class="jvsjkqbyk"/></g></mask></defs><path mask="url(#SVGyb2ZGe4D)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:seo-folder"} {...others} />);
}

export default Component;
