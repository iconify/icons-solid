import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhh7etb7m.css';
import '../../css/f/f7yw1h3jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhh7etb7m"/><path class="f7yw1h3jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-in-trouble"} {...others} />);
}

export default Component;
