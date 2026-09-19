import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc4ch3rjw.css';
import '../../css/j/jczmvvbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc4ch3rjw"/><path class="jczmvvbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:burger-alt"} {...others} />);
}

export default Component;
