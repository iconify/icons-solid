import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mwjqgf-_o.css';
import '../../css/f/fi_moqbpl.css';
import '../../css/h/hqhjn6b0z.css';
import '../../css/i/i7_ys9b1d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgxsm2lNr"><g class="rohhhzb0l"><rect class="mwjqgf-_o"/><path class="fi_moqbpl"/><circle class="hqhjn6b0z"/><path class="i7_ys9b1d"/></g></mask></defs><path mask="url(#SVGgxsm2lNr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radio-one"} {...others} />);
}

export default Component;
