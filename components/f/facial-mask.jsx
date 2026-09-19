import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jomh8wtzj.css';
import '../../css/j/j2o7b7b0q.css';
import '../../css/o/o-ol994oi.css';
import '../../css/h/hzf583jyg.css';
import '../../css/n/ne_2ukb4o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="jomh8wtzj"/><path class="j2o7b7b0q"/><path class="o-ol994oi"/><path class="hzf583jyg"/><path class="ne_2ukb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:facial-mask"} {...others} />);
}

export default Component;
