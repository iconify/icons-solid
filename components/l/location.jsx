import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/g/g9p73j6_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="zv6cqnbnp"/><path class="g9p73j6_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:location"} {...others} />);
}

export default Component;
