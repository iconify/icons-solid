import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7j58ebcw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u7j58ebcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:skip-backward-circle-fill"} {...others} />);
}

export default Component;
