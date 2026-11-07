import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf6cjrb9y.css';
import '../../css/e/egk9jea5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bf6cjrb9y"/><path clip-rule="evenodd" class="egk9jea5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-check-outline"} {...others} />);
}

export default Component;
