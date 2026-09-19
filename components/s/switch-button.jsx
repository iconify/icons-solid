import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dn_y4s9cj.css';
import '../../css/l/ly3952sva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxi7i2kST"><g class="ufeehvblu"><path class="dn_y4s9cj"/><path class="ly3952sva"/></g></mask></defs><path mask="url(#SVGxi7i2kST)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:switch-button"} {...others} />);
}

export default Component;
