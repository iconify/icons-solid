import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2n0gkolt.css';
import '../../css/a/abdebfw2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2n0gkolt"/><path class="abdebfw2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-drupal"} {...others} />);
}

export default Component;
