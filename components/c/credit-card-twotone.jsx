import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knaeq35ob.css';
import '../../css/p/p9-axprhp.css';
import '../../css/y/ynji0ebgt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="knaeq35ob"/><path class="p9-axprhp"/><path class="ynji0ebgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:credit-card-twotone"} {...others} />);
}

export default Component;
