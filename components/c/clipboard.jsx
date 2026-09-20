import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o6r3pxxtf.css';
import '../../css/m/m91uknbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o6r3pxxtf"/><path class="m91uknbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:clipboard"} {...others} />);
}

export default Component;
