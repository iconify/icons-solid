import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/via3n2bhx.css';
import '../../css/d/d2kfjzb0v.css';
import '../../css/k/k1uq304yb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmalrVbyd"><g class="ft5dv1b6b"><path class="via3n2bhx"/><rect class="d2kfjzb0v"/><circle transform="matrix(0 -1 -1 0 30 24)" class="k1uq304yb"/></g></mask></defs><path mask="url(#SVGmalrVbyd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wallet-three"} {...others} />);
}

export default Component;
