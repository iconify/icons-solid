import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz9u0m0if.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz9u0m0if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:panel-bottom-expand-solid"} {...others} />);
}

export default Component;
