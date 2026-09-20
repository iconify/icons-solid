import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c06y5ub8y.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="c06y5ub8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:face-meh-20-solid"} {...others} />);
}

export default Component;
