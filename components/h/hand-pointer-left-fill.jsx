import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7xi6581l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n7xi6581l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-left-fill"} {...others} />);
}

export default Component;
