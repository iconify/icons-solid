import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d80rk9xbs.css';
import '../../css/q/qwayru87p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d80rk9xbs"/><path clip-rule="evenodd" class="qwayru87p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-minimlistic-bold"} {...others} />);
}

export default Component;
