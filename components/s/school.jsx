import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfxaipb-q.css';
import '../../css/e/ez6lwcbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfxaipb-q"/><path class="ez6lwcbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:school"} {...others} />);
}

export default Component;
