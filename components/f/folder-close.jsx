import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi-9gbbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yi-9gbbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:folder-close"} {...others} />);
}

export default Component;
