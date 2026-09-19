import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/i/igjrdzbaq.css';
import '../../css/t/tv5ukobod.css';
import '../../css/x/xvy4agd9u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5ulH7bQf"><g class="hv130ab-t"><path class="igjrdzbaq"/><path class="tv5ukobod"/><path class="xvy4agd9u"/></g></mask></defs><path mask="url(#SVG5ulH7bQf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:beer"} {...others} />);
}

export default Component;
