import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1-5a6jdl.css';
import '../../css/j/jj_zol4wm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n1-5a6jdl"/><path class="jj_zol4wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tilgjengelighet-lydtekst"} {...others} />);
}

export default Component;
