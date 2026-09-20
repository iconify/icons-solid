import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra7rlfb9o.css';
import '../../css/a/a1ufk92yd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ra7rlfb9o"/><path class="a1ufk92yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-laboratory-test-blood-sugar"} {...others} />);
}

export default Component;
