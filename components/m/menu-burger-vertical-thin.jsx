import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thsd4275x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thsd4275x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:menu-burger-vertical-thin"} {...others} />);
}

export default Component;
