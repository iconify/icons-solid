import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/esdm6zq7p.css';
import '../../css/u/uqwtilb0q.css';
import '../../css/d/dezkjtgws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="esdm6zq7p"/><path class="uqwtilb0q"/><path class="dezkjtgws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cake"} {...others} />);
}

export default Component;
