import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqwvi89jg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jqwvi89jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box2-heart-fill"} {...others} />);
}

export default Component;
