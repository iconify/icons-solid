import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r9ztc99mw.css';
import '../../css/s/sqb547b2g.css';
import '../../css/m/m6j54zbzf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFJKSGetg"><g class="aql7dnt-u"><path class="r9ztc99mw"/><path clip-rule="evenodd" class="sqb547b2g"/><path class="m6j54zbzf"/></g></mask></defs><path mask="url(#SVGFJKSGetg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:slide-two"} {...others} />);
}

export default Component;
