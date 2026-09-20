import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6z3wwxoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6z3wwxoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:golf-off"} {...others} />);
}

export default Component;
