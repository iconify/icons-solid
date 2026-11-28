import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agkfsk3zk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agkfsk3zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:scale-balance"} {...others} />);
}

export default Component;
