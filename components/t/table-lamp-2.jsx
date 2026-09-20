import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzxkhmb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fzxkhmb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:table-lamp-2"} {...others} />);
}

export default Component;
