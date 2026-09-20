import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts8p5pbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts8p5pbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:north-east-escape-line"} {...others} />);
}

export default Component;
