import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td859mbpm.css';
import '../../css/p/pmiyxhb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td859mbpm"/><path class="pmiyxhb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:mouse-2-fill"} {...others} />);
}

export default Component;
