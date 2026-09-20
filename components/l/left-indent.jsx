import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gteaiobyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gteaiobyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:left-indent"} {...others} />);
}

export default Component;
