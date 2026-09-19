import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wbtbukbtl.css';
import '../../css/p/py2nz6bgy.css';
import '../../css/t/ty5xaz-3w.css';
import '../../css/r/ri95t2bog.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="wbtbukbtl"/><path class="py2nz6bgy"/><path class="ty5xaz-3w"/><path class="ri95t2bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:video-conference"} {...others} />);
}

export default Component;
