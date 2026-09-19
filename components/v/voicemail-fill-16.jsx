import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vi1e7rb5q.css';
import '../../css/l/lncnfvbwz.css';
import '../../css/g/glfhpzbry.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="flen3tbdj"><circle class="vi1e7rb5q"/><circle class="lncnfvbwz"/><path class="glfhpzbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:voicemail-fill-16"} {...others} />);
}

export default Component;
