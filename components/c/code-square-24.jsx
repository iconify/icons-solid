import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmjreii-g.css';
import '../../css/t/tbcp7-bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmjreii-g"/><path class="tbcp7-bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:code-square-24"} {...others} />);
}

export default Component;
