import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn7rt1cnj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yn7rt1cnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:rails-with-derailer"} {...others} />);
}

export default Component;
