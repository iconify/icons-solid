import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf2h6wznc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kf2h6wznc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:github-fill-24"} {...others} />);
}

export default Component;
