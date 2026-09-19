import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo7ppms-u.css';
import '../../css/v/vdpug-b2j.css';
import '../../css/t/ttgfljywe.css';
import '../../css/b/bof-dxn3i.css';
import '../../css/d/d7k55_bin.css';
import '../../css/s/snuf20bte.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIsK5GmdB"><g class="ft5dv1b6b"><path class="xo7ppms-u"/><path class="vdpug-b2j"/><path class="ttgfljywe"/><rect class="bof-dxn3i"/><circle class="d7k55_bin"/><path class="snuf20bte"/></g></mask></defs><path mask="url(#SVGIsK5GmdB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clock-tower"} {...others} />);
}

export default Component;
