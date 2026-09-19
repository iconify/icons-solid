import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngxjjve9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ngxjjve9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:shield-outline"} {...others} />);
}

export default Component;
