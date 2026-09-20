import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/egg9c6b9i.css';
import '../../css/s/saek4wbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="egg9c6b9i"/><path class="saek4wbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:directbox-receive"} {...others} />);
}

export default Component;
