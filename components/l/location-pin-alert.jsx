import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5i58ebyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g5i58ebyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:location-pin-alert"} {...others} />);
}

export default Component;
