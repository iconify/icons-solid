import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n4pernbka.css';
import '../../css/x/x7s0ksbho.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlnImqe7h"><g class="ufeehvblu"><path class="n4pernbka"/><path class="x7s0ksbho"/></g></mask></defs><path mask="url(#SVGlnImqe7h)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:coupon"} {...others} />);
}

export default Component;
