import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acrf5cy9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acrf5cy9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-pull-request-create-fill"} {...others} />);
}

export default Component;
