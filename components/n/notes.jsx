import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wqt01gb2m.css';
import '../../css/u/uouile4nz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHfF3VcIU"><g class="ufeehvblu"><path class="wqt01gb2m"/><path class="uouile4nz"/></g></mask></defs><path mask="url(#SVGHfF3VcIU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:notes"} {...others} />);
}

export default Component;
