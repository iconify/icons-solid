import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhyma36tc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bhyma36tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-down-left-circle-solid"} {...others} />);
}

export default Component;
