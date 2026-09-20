import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv8u7u5kw.css';
import '../../css/h/h1vzkebnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sv8u7u5kw"/><path class="h1vzkebnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smartphone-app-widget-stock"} {...others} />);
}

export default Component;
