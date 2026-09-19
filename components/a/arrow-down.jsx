import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zml4mvy9b.css';
import '../../css/g/gertnpb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zml4mvy9b"/><path class="gertnpb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:arrow-down"} {...others} />);
}

export default Component;
