import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt9503pkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rt9503pkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:playlist4"} {...others} />);
}

export default Component;
