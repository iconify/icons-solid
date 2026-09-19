import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/ok3giiwjs.css';
import '../../css/s/skzye-b9q.css';
import '../../css/m/mtk09za2a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQzGzbbfW"><g class="v3_i3wktz"><path class="ok3giiwjs"/><path class="skzye-b9q"/><path class="mtk09za2a"/></g></mask></defs><path mask="url(#SVGQzGzbbfW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:upload-laptop"} {...others} />);
}

export default Component;
