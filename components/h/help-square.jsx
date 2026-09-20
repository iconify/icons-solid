import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v34xvnb2a.css';
import '../../css/h/hmuxfdcal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v34xvnb2a"/><path class="hmuxfdcal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:help-square"} {...others} />);
}

export default Component;
