import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl-up0lit.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kl-up0lit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:panda-filled"} {...others} />);
}

export default Component;
