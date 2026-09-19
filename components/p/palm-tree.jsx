import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iubo3_f_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iubo3_f_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:palm-tree"} {...others} />);
}

export default Component;
