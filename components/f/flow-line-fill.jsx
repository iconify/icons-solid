import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1x3wj3gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b1x3wj3gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:flow-line-fill"} {...others} />);
}

export default Component;
