import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua1c_6t9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ua1c_6t9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:delete-bookmark"} {...others} />);
}

export default Component;
