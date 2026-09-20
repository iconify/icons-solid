import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ag-15qb5d.css';
import '../../css/o/o8zortoea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ag-15qb5d"/><path class="o8zortoea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card4"} {...others} />);
}

export default Component;
