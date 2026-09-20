import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkkkvn-jc.css';
import '../../css/v/vnaypctab.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dkkkvn-jc"/><path class="vnaypctab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:change-clean-energy"} {...others} />);
}

export default Component;
