import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bhx7oub5v.css';
import '../../css/m/mb25lk9fi.css';
import '../../css/h/hdew0eczb.css';
import '../../css/w/wx6r6fbbz.css';
import '../../css/d/dolr3bcpw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXUhuLcuq"><g class="ufeehvblu"><path class="bhx7oub5v"/><path class="mb25lk9fi"/><path class="hdew0eczb"/><path class="wx6r6fbbz"/><path class="dolr3bcpw"/></g></mask></defs><path mask="url(#SVGXUhuLcuq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hospital-four"} {...others} />);
}

export default Component;
