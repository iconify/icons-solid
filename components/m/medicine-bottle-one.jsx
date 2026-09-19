import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uwrjvfsrp.css';
import '../../css/p/p-rbzybho.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkzVThlsm"><g class="ufeehvblu"><path class="uwrjvfsrp"/><path class="p-rbzybho"/></g></mask></defs><path mask="url(#SVGkzVThlsm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medicine-bottle-one"} {...others} />);
}

export default Component;
