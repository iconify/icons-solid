import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3mo1ml7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n3mo1ml7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tapas-filled"} {...others} />);
}

export default Component;
