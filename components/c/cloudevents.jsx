import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uok3q6dkc.css';
import '../../css/s/sf-d6_0vv.css';
import '../../css/g/gp5dk8tef.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};
const content = `<path class="uok3q6dkc"/><path class="sf-d6_0vv"/><path class="gp5dk8tef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:cloudevents"} {...others} />);
}

export default Component;
