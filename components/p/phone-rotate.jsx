import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6l5_2szw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v6l5_2szw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-rotate"} {...others} />);
}

export default Component;
