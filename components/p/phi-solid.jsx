import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjqn1y8dg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjqn1y8dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:phi-solid"} {...others} />);
}

export default Component;
