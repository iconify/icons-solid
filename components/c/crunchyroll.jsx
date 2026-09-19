import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0t0l7b9n.css';
import '../../css/b/bzew_ab9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0t0l7b9n"/><path class="bzew_ab9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:crunchyroll"} {...others} />);
}

export default Component;
