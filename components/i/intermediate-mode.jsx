import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7g8vpbdo.css';
import '../../css/n/n1986m9oo.css';
import '../../css/s/swj_dybjv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJvYUhbbT"><g class="l7g8vpbdo"><path class="n1986m9oo"/><path class="swj_dybjv"/></g></mask></defs><path mask="url(#SVGJvYUhbbT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:intermediate-mode"} {...others} />);
}

export default Component;
