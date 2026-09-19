import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a0v65gtra.css';
import '../../css/q/qebjus5ad.css';
import '../../css/e/ejxs69auf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtDIhpJdd"><g class="ufeehvblu"><rect class="a0v65gtra"/><path class="qebjus5ad"/><path class="ejxs69auf"/></g></mask></defs><path mask="url(#SVGtDIhpJdd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lock"} {...others} />);
}

export default Component;
