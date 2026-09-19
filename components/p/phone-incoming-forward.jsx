import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9286gj6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h9286gj6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:phone-incoming-forward"} {...others} />);
}

export default Component;
