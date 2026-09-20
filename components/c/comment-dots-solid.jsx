import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa6k8cc-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oa6k8cc-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:comment-dots-solid"} {...others} />);
}

export default Component;
