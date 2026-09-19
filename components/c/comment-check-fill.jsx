import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh5fs6bay.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mh5fs6bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-check-fill"} {...others} />);
}

export default Component;
