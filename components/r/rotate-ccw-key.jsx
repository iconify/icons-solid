import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8w59ycpi.css';
import '../../css/r/rh9nlhvab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w8w59ycpi"/><path class="rh9nlhvab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:rotate-ccw-key"} {...others} />);
}

export default Component;
