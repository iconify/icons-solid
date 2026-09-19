import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8fpg0bpe.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="h8fpg0bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sigma"} {...others} />);
}

export default Component;
