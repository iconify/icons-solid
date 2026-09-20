import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7a2x58go.css';
import '../../css/j/jmmn-h0hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7a2x58go"/><path class="jmmn-h0hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-three"} {...others} />);
}

export default Component;
