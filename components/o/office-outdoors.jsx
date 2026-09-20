import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inw2r42zl.css';
import '../../css/m/mpnkgac7t.css';
import '../../css/v/vas35qbgt.css';
import '../../css/i/ix8s05bao.css';
import '../../css/n/ngb0s5iew.css';
import '../../css/k/kkty91bls.css';
import '../../css/p/ptl0pci0n.css';
import '../../css/u/u3jcnibsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="inw2r42zl"/><path class="mpnkgac7t"/><path class="vas35qbgt"/><path class="ix8s05bao"/><path class="ngb0s5iew"/><path class="kkty91bls"/><path class="ptl0pci0n"/><path class="u3jcnibsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-outdoors"} {...others} />);
}

export default Component;
