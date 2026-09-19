import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/khai3abln.css';
import '../../css/k/klf3tcc5h.css';
import '../../css/d/d1c1fvdqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeOhYVDdE"><g class="s9cl3zbei"><rect class="khai3abln"/><path class="klf3tcc5h"/><path class="d1c1fvdqn"/></g></mask></defs><path mask="url(#SVGeOhYVDdE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:laptop-computer"} {...others} />);
}

export default Component;
