import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i5mh1qbsc.css';
import '../../css/y/yhk6rrvjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="i5mh1qbsc"/><path class="yhk6rrvjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:clipboard"} {...others} />);
}

export default Component;
