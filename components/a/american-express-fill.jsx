import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjv1u1-hz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zjv1u1-hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:american-express-fill"} {...others} />);
}

export default Component;
