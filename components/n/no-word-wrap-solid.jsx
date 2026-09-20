import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0o1d57if.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a0o1d57if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:no-word-wrap-solid"} {...others} />);
}

export default Component;
