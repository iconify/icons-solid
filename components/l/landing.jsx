import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qt1es7b7z.css';
import '../../css/l/l_tp72bqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEr0T1crA"><g class="aql7dnt-u"><path class="qt1es7b7z"/><path class="l_tp72bqp"/></g></mask></defs><path mask="url(#SVGEr0T1crA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:landing"} {...others} />);
}

export default Component;
