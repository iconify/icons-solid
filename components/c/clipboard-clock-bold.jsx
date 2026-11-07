import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je9uz5b7m.css';
import '../../css/z/z8_m97b4y.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="je9uz5b7m"/><path clip-rule="evenodd" class="z8_m97b4y"/><path class="c4946-17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-clock-bold"} {...others} />);
}

export default Component;
