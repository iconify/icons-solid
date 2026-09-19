import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elcyv1bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elcyv1bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comment-block-02"} {...others} />);
}

export default Component;
