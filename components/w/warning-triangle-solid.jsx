import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba6a_pbed.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ba6a_pbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:warning-triangle-solid"} {...others} />);
}

export default Component;
