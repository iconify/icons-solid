import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_vdx0c-z.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="o_vdx0c-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:letter-o"} {...others} />);
}

export default Component;
