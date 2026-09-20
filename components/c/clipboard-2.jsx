import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghuv7u2ge.css';
import '../../css/p/p2ozvkboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ghuv7u2ge"/><path class="p2ozvkboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:clipboard-2"} {...others} />);
}

export default Component;
