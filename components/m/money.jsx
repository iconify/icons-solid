import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gxn-lchhn.css';
import '../../css/g/gp0egaclj.css';
import '../../css/j/jj1uypb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gxn-lchhn"/><circle class="gp0egaclj"/><path class="jj1uypb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:money"} {...others} />);
}

export default Component;
