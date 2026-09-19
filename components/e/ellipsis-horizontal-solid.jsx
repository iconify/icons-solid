import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia9ptx4wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ia9ptx4wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:ellipsis-horizontal-solid"} {...others} />);
}

export default Component;
