import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgkc1nqpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgkc1nqpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-bottom-close"} {...others} />);
}

export default Component;
