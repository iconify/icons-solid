import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9igabbew.css';
import '../../css/w/wpb5j1boy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer m9igabbew"/><path class="duoicon-primary-layer wpb5j1boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:book-3"} {...others} />);
}

export default Component;
