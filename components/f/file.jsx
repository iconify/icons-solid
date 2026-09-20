import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_5nzzr0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r_5nzzr0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file"} {...others} />);
}

export default Component;
