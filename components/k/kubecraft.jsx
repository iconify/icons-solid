import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4imvxbfg.css';
import '../../css/p/pdqwe3x1i.css';
import '../../css/a/a2shhjbqb.css';
import '../../css/e/eldq07ydi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s4imvxbfg"/><path class="pdqwe3x1i"/><path class="a2shhjbqb"/><path class="eldq07ydi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kubecraft"} {...others} />);
}

export default Component;
