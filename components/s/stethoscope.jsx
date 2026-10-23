import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m7b69nb6a.css';
import '../../css/z/z0wwv1b9z.css';
import '../../css/v/vot82uh-i.css';
import '../../css/g/g28iz0beu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="m7b69nb6a"/><path class="z0wwv1b9z"/><path class="vot82uh-i"/><path class="g28iz0beu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:stethoscope"} {...others} />);
}

export default Component;
