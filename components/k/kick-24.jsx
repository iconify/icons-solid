import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvup3bmvu.css';
import '../../css/q/qt8ow3bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvup3bmvu"/><path class="qt8ow3bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:kick-24"} {...others} />);
}

export default Component;
