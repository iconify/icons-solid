import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqolircih.css';
import '../../css/i/i2hg8q8zl.css';
import '../../css/z/zngy0fbvj.css';
import '../../css/h/hbs3nacwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dqolircih"/><path class="i2hg8q8zl"/><path class="zngy0fbvj"/><path class="hbs3nacwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dessert"} {...others} />);
}

export default Component;
