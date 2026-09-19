import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os6uvc61m.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="os6uvc61m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:person"} {...others} />);
}

export default Component;
