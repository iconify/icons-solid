import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mlpd71upt.css';
import '../../css/b/bvyljdv9y.css';
import '../../css/s/s-eh6tbeb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRj3jg5kR"><g class="aql7dnt-u"><path class="mlpd71upt"/><path class="bvyljdv9y"/><path class="s-eh6tbeb"/></g></mask></defs><path mask="url(#SVGRj3jg5kR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pacifier"} {...others} />);
}

export default Component;
