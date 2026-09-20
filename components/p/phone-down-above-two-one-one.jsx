import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7jt5ebyc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o7jt5ebyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-down-above-two-one-one"} {...others} />);
}

export default Component;
