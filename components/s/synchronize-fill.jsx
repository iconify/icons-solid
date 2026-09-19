import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rejyhqb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rejyhqb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:synchronize-fill"} {...others} />);
}

export default Component;
