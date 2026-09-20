import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa9u5v4ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa9u5v4ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-narrow-wide-fill"} {...others} />);
}

export default Component;
