import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c-n0k9bwf.css';
import '../../css/n/n4nzln9ol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c-n0k9bwf"/><path class="n4nzln9ol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package"} {...others} />);
}

export default Component;
