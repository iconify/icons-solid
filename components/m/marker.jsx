import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-ego69_b.css';
import '../../css/r/rz02wcb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer f-ego69_b"/><path class="duoicon-primary-layer rz02wcb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:marker"} {...others} />);
}

export default Component;
