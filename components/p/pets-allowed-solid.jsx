import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv7vak98b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hv7vak98b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pets-allowed-solid"} {...others} />);
}

export default Component;
