import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppuquib5b.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="ppuquib5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:relationshape-guide-26"} {...others} />);
}

export default Component;
