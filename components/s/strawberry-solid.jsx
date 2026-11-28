import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqc7ymbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqc7ymbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:strawberry-solid"} {...others} />);
}

export default Component;
