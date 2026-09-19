import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/h/h-23ectuy.css';
import '../../css/y/ymf7_ibpz.css';
import '../../css/z/z9ie7sb5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqXN6heRN"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="h-23ectuy"/><path class="ymf7_ibpz"/><path class="z9ie7sb5t"/></g></mask></defs><path mask="url(#SVGqXN6heRN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:inbox-success-r"} {...others} />);
}

export default Component;
