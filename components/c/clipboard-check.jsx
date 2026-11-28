import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzec2b5dy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzec2b5dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:clipboard-check"} {...others} />);
}

export default Component;
