import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr3kuvq0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr3kuvq0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:nuxt"} {...others} />);
}

export default Component;
