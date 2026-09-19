import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtjjrsage.css';
import '../../css/l/lwmdjtqpi.css';
import '../../css/p/pda23471i.css';
import '../../css/n/nf2n-db8h.css';
import '../../css/o/oav8s0b-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTXxtdeJM"><g class="ft5dv1b6b"><path class="vtjjrsage"/><path clip-rule="evenodd" class="lwmdjtqpi"/><path class="pda23471i"/><path class="nf2n-db8h"/><path class="oav8s0b-u"/></g></mask></defs><path mask="url(#SVGTXxtdeJM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:save"} {...others} />);
}

export default Component;
