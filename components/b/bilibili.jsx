import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c09o6msef.css';
import '../../css/l/l8j1q_y9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="c09o6msef"/><path class="l8j1q_y9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:bilibili"} {...others} />);
}

export default Component;
