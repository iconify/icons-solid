import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2fdeh9wd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q2fdeh9wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:align-text-center-remix"} {...others} />);
}

export default Component;
