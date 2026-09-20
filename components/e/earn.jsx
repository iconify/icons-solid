import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3uosq4ww.css';
import '../../css/z/zwrp4pohh.css';
import '../../css/w/wuhl7gboj.css';
import '../../css/h/hxvb9mb0v.css';
import '../../css/d/dkolos56f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3uosq4ww"/><path class="zwrp4pohh"/><path class="wuhl7gboj"/><path class="hxvb9mb0v"/><path clip-rule="evenodd" class="dkolos56f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:earn"} {...others} />);
}

export default Component;
