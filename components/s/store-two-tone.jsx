import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq8i14b1j.css';
import '../../css/b/b9c_zrhtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jq8i14b1j"/><path class="b9c_zrhtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:store-two-tone"} {...others} />);
}

export default Component;
