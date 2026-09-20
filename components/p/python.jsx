import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrbwxfd2d.css';
import '../../css/h/h697m9a0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrbwxfd2d"/><path class="h697m9a0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:python"} {...others} />);
}

export default Component;
