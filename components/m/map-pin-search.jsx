import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2rj0nmor.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y2rj0nmor"/><circle class="zv6cqnbnp"/><circle class="ez1x61b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-search"} {...others} />);
}

export default Component;
