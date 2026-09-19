import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/ajqn6mb9q.css';
import '../../css/u/uh2p8_idr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPvZ9jdEH"><g class="ufeehvblu"><path class="ajqn6mb9q"/><path class="uh2p8_idr"/></g></mask></defs><path mask="url(#SVGPvZ9jdEH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bib"} {...others} />);
}

export default Component;
