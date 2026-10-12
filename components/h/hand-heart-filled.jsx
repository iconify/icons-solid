import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkvx_ob1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xkvx_ob1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-heart-filled"} {...others} />);
}

export default Component;
