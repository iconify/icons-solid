import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a_kjio-um.css';
import '../../css/y/yndnxvb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="a_kjio-um"/><path class="yndnxvb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-fill"} {...others} />);
}

export default Component;
