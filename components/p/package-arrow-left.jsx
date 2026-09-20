import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv8-pwlcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv8-pwlcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:package-arrow-left"} {...others} />);
}

export default Component;
