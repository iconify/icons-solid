import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rwo6qqb0d.css';
import '../../css/n/n5jacodfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="rwo6qqb0d"/><path class="n5jacodfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-02"} {...others} />);
}

export default Component;
