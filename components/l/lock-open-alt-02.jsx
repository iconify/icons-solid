import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff8g36beb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ff8g36beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:lock-open-alt-02"} {...others} />);
}

export default Component;
