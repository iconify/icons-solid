import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/m/ms27-ub9z.css';
import '../../css/p/piwg5-x2u.css';
import '../../css/c/czqk2mbmp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5LFGYb3V"><g class="hv130ab-t"><path class="ms27-ub9z"/><path class="piwg5-x2u"/><path class="czqk2mbmp"/></g></mask></defs><path mask="url(#SVG5LFGYb3V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vertically-centered"} {...others} />);
}

export default Component;
