import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id5i4irup.css';
import '../../css/q/qi6vm4w9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="id5i4irup secondary"/><path class="primary qi6vm4w9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:triangle-duo"} {...others} />);
}

export default Component;
