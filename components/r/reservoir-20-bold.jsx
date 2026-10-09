import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9cqm39fx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b9cqm39fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reservoir-20-bold"} {...others} />);
}

export default Component;
