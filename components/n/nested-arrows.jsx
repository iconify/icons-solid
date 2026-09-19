import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kcg668zpi.css';
import '../../css/k/k04dfjb8n.css';
import '../../css/e/e9olh2zok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmZpjbeyA"><g class="aql7dnt-u"><path class="kcg668zpi"/><path class="k04dfjb8n"/><path class="e9olh2zok"/></g></mask></defs><path mask="url(#SVGmZpjbeyA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nested-arrows"} {...others} />);
}

export default Component;
