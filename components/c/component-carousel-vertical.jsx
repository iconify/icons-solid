import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzm8cjx2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jzm8cjx2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:component-carousel-vertical"} {...others} />);
}

export default Component;
