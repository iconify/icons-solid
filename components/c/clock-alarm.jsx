import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/grhwxq4gj.css';
import '../../css/c/cij3g2hio.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="grhwxq4gj"/><circle class="cij3g2hio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:clock-alarm"} {...others} />);
}

export default Component;
