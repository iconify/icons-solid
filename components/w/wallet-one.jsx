import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lydn-6aaw.css';
import '../../css/g/gstq5_hny.css';
import '../../css/r/r7k436bkt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqhOK632z"><g class="ft5dv1b6b"><rect class="lydn-6aaw"/><path class="gstq5_hny"/><circle class="r7k436bkt"/></g></mask></defs><path mask="url(#SVGqhOK632z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wallet-one"} {...others} />);
}

export default Component;
