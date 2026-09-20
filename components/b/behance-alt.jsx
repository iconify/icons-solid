import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovb3_79qw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovb3_79qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:behance-alt"} {...others} />);
}

export default Component;
