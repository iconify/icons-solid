import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi7nx8bft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi7nx8bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:row-vertical"} {...others} />);
}

export default Component;
