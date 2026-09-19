import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/n/nlfdz8b9y.css';
import '../../css/w/w-9--ob6j.css';
import '../../css/s/swjdnjbbn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOlHCtd3v"><g class="hv130ab-t"><path class="nlfdz8b9y"/><path class="w-9--ob6j"/><path class="swjdnjbbn"/></g></mask></defs><path mask="url(#SVGOlHCtd3v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:copy-one"} {...others} />);
}

export default Component;
