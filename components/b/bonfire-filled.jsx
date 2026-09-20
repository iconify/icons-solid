import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6yu4cbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o6yu4cbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bonfire-filled"} {...others} />);
}

export default Component;
