import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd5jr6i4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd5jr6i4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-language-html-5-bold"} {...others} />);
}

export default Component;
