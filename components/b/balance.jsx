import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chowghc9o.css';
import '../../css/i/iuef7db3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chowghc9o"/><path class="iuef7db3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:balance"} {...others} />);
}

export default Component;
