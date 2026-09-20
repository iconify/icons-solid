import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3bj4mojt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3bj4mojt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forbidden2"} {...others} />);
}

export default Component;
