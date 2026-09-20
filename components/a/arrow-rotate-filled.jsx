import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kef6-gokw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kef6-gokw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-rotate-filled"} {...others} />);
}

export default Component;
