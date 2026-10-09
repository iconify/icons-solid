import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqjtt0biw.css';
import '../../css/a/a3yyyw2au.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zqjtt0biw"/><path class="a3yyyw2au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:droplet-48"} {...others} />);
}

export default Component;
