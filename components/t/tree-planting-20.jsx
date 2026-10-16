import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-wmmyb1y.css';
import '../../css/g/gl50l81hz.css';
import '../../css/x/xhaspmuql.css';
import '../../css/c/codgvacjt.css';
import '../../css/n/nmlry0bzq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j-wmmyb1y"/><path class="gl50l81hz"/><path class="xhaspmuql"/><path class="codgvacjt"/><path class="nmlry0bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-planting-20"} {...others} />);
}

export default Component;
