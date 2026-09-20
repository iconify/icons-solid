import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o900hie1y.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o900hie1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-up-1-remix"} {...others} />);
}

export default Component;
