import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmzh9qo7m.css';
import '../../css/w/w8j546l7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zmzh9qo7m"/><path class="w8j546l7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:check-circle"} {...others} />);
}

export default Component;
