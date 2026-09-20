import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmb706_bp.css';
import '../../css/j/j3ziv3b8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dmb706_bp"/><path class="j3ziv3b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zengo"} {...others} />);
}

export default Component;
