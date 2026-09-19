import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i_rbvcu_z.css';
import '../../css/k/kxz6i3bvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaVClCcHM"><g class="ufeehvblu"><path class="i_rbvcu_z"/><path class="kxz6i3bvk"/></g></mask></defs><path mask="url(#SVGaVClCcHM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-word"} {...others} />);
}

export default Component;
