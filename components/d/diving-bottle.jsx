import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u4sexs81j.css';
import '../../css/o/o79o6ib8v.css';
import '../../css/m/mg0dmqb6d.css';
import '../../css/t/tbxfsnbba.css';
import '../../css/j/jys39cmes.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtOPbNcPi"><g class="aql7dnt-u"><path class="u4sexs81j"/><path class="o79o6ib8v"/><rect class="mg0dmqb6d"/><rect class="tbxfsnbba"/><path class="jys39cmes"/></g></mask></defs><path mask="url(#SVGtOPbNcPi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:diving-bottle"} {...others} />);
}

export default Component;
