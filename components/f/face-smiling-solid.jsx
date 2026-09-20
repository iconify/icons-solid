import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg7yjrb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cg7yjrb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:face-smiling-solid"} {...others} />);
}

export default Component;
