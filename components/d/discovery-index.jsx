import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hq2b25tos.css';
import '../../css/d/djvtkbc3o.css';
import '../../css/e/eod7x15fz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnNShSk4Z"><g class="v3_i3wktz"><path class="hq2b25tos"/><path class="djvtkbc3o"/><path class="eod7x15fz"/></g></mask></defs><path mask="url(#SVGnNShSk4Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:discovery-index"} {...others} />);
}

export default Component;
