import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/agd_zkb-s.css';
import '../../css/f/fbeg4p18s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="agd_zkb-s"/><path class="fbeg4p18s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lasso"} {...others} />);
}

export default Component;
