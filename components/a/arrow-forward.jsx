import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r83n3znhw.css';
import '../../css/s/sdi_sccuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r83n3znhw"/><path class="sdi_sccuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:arrow-forward"} {...others} />);
}

export default Component;
