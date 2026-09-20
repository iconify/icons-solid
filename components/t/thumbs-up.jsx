import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c09fl3b6m.css';
import '../../css/d/de6f2tb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c09fl3b6m"/><path class="de6f2tb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:thumbs-up"} {...others} />);
}

export default Component;
