import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_6iahb2t.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w_6iahb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:addfriend"} {...others} />);
}

export default Component;
