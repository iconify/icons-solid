import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iddj-1bnv.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="iddj-1bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:day-rain"} {...others} />);
}

export default Component;
