import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwn7tqbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwn7tqbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:wheelchair-alt-24px"} {...others} />);
}

export default Component;
