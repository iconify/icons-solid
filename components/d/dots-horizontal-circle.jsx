import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/caee78sut.css';
import '../../css/p/prj-1jbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="caee78sut"/><path class="prj-1jbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dots-horizontal-circle"} {...others} />);
}

export default Component;
