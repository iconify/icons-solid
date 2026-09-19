import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juq_70b2e.css';
import '../../css/b/b48fucctu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="juq_70b2e"/><path class="b48fucctu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-up-on-square-stack-16-solid"} {...others} />);
}

export default Component;
