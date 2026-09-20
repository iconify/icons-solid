import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/owzpiw7rd.css';
import '../../css/u/um3ym-bhg.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/a/aeq8lyaql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="owzpiw7rd"/><path class="um3ym-bhg"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-add"} {...others} />);
}

export default Component;
