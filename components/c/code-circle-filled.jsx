import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd9fl7typ.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nd9fl7typ"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:code-circle-filled"} {...others} />);
}

export default Component;
