import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynxabotvb.css';
import '../../css/n/nk5kckb1g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ynxabotvb"/><path class="nk5kckb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:antlr"} {...others} />);
}

export default Component;
