import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/i/in8va7fps.css';
import '../../css/l/ljtua8b8a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="in8va7fps"/><path clip-rule="evenodd" class="ljtua8b8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nests"} {...others} />);
}

export default Component;
