import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4j8ruk9q.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="d4j8ruk9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:delicious-circle"} {...others} />);
}

export default Component;
