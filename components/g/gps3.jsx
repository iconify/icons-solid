import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c779anrza.css';
import '../../css/n/nuhjsybgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c779anrza"/><path class="nuhjsybgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gps3"} {...others} />);
}

export default Component;
