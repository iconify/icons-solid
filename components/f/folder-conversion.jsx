import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/b/b9ar51ayx.css';
import '../../css/p/p1ehdabkg.css';
import '../../css/f/f3gvbxbbm.css';
import '../../css/n/ns2om9uwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="b9ar51ayx"/><path class="p1ehdabkg"/><path class="f3gvbxbbm"/><path class="ns2om9uwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-conversion"} {...others} />);
}

export default Component;
