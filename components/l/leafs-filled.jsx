import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aooua_bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aooua_bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:leafs-filled"} {...others} />);
}

export default Component;
