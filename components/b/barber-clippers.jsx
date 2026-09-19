import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cwxxxccvd.css';
import '../../css/u/umzzf2hmp.css';
import '../../css/g/g0etr6b-w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzPKrwcOW"><g class="aql7dnt-u"><path class="cwxxxccvd"/><rect class="umzzf2hmp"/><path class="g0etr6b-w"/></g></mask></defs><path mask="url(#SVGzPKrwcOW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:barber-clippers"} {...others} />);
}

export default Component;
