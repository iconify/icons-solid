import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2eb48dil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b2eb48dil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:layers-alt"} {...others} />);
}

export default Component;
