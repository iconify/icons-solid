import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvqw1eblr.css';
import '../../css/b/bugs1lbja.css';
import '../../css/w/wh6_lm8cy.css';
import '../../css/i/ik78sgb1x.css';
import '../../css/n/n4bf-vlvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvqw1eblr"/><path class="bugs1lbja"/><path class="wh6_lm8cy"/><path class="ik78sgb1x"/><path class="n4bf-vlvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-old-bold-duotone"} {...others} />);
}

export default Component;
