import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v22vrs4cz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v22vrs4cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:electronic-arts-logo-solid"} {...others} />);
}

export default Component;
