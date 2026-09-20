import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyf2kv-0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gyf2kv-0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:paperclip"} {...others} />);
}

export default Component;
