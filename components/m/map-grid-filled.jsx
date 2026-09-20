import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opos94p9c.css';
import '../../css/o/o42lp8b_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opos94p9c"/><path class="o42lp8b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-grid-filled"} {...others} />);
}

export default Component;
