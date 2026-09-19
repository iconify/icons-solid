import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb3kqobhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb3kqobhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bell-minus-filled"} {...others} />);
}

export default Component;
