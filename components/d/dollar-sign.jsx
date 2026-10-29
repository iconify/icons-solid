import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncf43d60x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncf43d60x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:dollar-sign"} {...others} />);
}

export default Component;
