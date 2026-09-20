import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjgg4ac9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bjgg4ac9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-round-line"} {...others} />);
}

export default Component;
