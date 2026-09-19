import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb5kezbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb5kezbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-brush-alt"} {...others} />);
}

export default Component;
