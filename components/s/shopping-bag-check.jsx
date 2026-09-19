import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvh-a_b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tvh-a_b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shopping-bag-check"} {...others} />);
}

export default Component;
