import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g635niwpv.css';
import '../../css/h/hwdm3r8bh.css';
import '../../css/u/umi0alh0y.css';
import '../../css/g/gn43k9b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g635niwpv"/><path class="hwdm3r8bh"/><path class="umi0alh0y"/><path class="gn43k9b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-upload-information"} {...others} />);
}

export default Component;
