import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otiao8vie.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="otiao8vie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dot-with-rays-right"} {...others} />);
}

export default Component;
