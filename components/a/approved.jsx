import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze5jguwzp.css';
import '../../css/s/s7t5djz9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ze5jguwzp"/><path class="duoicon-primary-layer s7t5djz9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:approved"} {...others} />);
}

export default Component;
