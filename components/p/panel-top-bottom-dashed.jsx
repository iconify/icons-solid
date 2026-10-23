import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvbsrhv9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvbsrhv9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-top-bottom-dashed"} {...others} />);
}

export default Component;
