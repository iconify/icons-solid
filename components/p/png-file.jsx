import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dedd0_bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dedd0_bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:png-file"} {...others} />);
}

export default Component;
