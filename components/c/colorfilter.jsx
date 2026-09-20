import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hftl6jqgd.css';
import '../../css/p/pqjz-tb5y.css';
import '../../css/a/avtw3ccyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hftl6jqgd"/><path class="pqjz-tb5y"/><path class="avtw3ccyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:colorfilter"} {...others} />);
}

export default Component;
