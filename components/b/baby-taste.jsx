import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qjqg17_zi.css';
import '../../css/f/f8cw1kb1c.css';
import '../../css/k/kn4yf2zml.css';
import '../../css/f/fkjiz3woz.css';
import '../../css/l/l5352421z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1dH86dZt"><g class="ufeehvblu"><path class="qjqg17_zi"/><path class="f8cw1kb1c"/><path class="kn4yf2zml"/><path class="fkjiz3woz"/><path class="l5352421z"/></g></mask></defs><path mask="url(#SVG1dH86dZt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-taste"} {...others} />);
}

export default Component;
