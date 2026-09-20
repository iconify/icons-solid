import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx9s66bso.css';
import '../../css/h/hntgybcog.css';
import '../../css/e/e30zw1b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG3rlZXbHi" class="zx9s66bso"/></defs><g class="hntgybcog"><use href="#SVG3rlZXbHi"/><use href="#SVG3rlZXbHi"/><path class="e30zw1b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart-success"} {...others} />);
}

export default Component;
