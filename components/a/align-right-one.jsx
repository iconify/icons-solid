import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/g/g5oougblb.css';
import '../../css/y/y31--wboh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6dRdjcVe"><g class="hv130ab-t"><path class="g5oougblb"/><path class="y31--wboh"/></g></mask></defs><path mask="url(#SVG6dRdjcVe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-right-one"} {...others} />);
}

export default Component;
