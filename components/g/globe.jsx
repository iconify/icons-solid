import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8w0fkz_u.css';
import '../../css/r/ru5-vabsi.css';
import '../../css/j/jdpx20bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="w8w0fkz_u"/><path class="ru5-vabsi"/><path class="jdpx20bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:globe"} {...others} />);
}

export default Component;
