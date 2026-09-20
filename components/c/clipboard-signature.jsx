import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8u9_5smu.css';
import '../../css/m/mp927tb3p.css';
import '../../css/s/s820mbb7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="u8u9_5smu"/><path class="mp927tb3p"/><path class="s820mbb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-signature"} {...others} />);
}

export default Component;
