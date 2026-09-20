import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyv3hac8i.css';
import '../../css/x/xg50517th.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyv3hac8i"/><path clip-rule="evenodd" class="xg50517th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:clover"} {...others} />);
}

export default Component;
