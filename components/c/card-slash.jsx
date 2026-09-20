import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ock46ut8j.css';
import '../../css/k/kdcemgo2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ock46ut8j"/><path class="kdcemgo2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-slash"} {...others} />);
}

export default Component;
