import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nmv1skbvq.css';
import '../../css/l/lvw2-sbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nmv1skbvq"/><path class="lvw2-sbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video3"} {...others} />);
}

export default Component;
