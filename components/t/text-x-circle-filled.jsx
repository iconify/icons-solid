import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4xqd7m7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4xqd7m7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-x-circle-filled"} {...others} />);
}

export default Component;
