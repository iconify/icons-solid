import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8ovhibjc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c8ovhibjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pip-fill"} {...others} />);
}

export default Component;
