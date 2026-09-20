import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aexe18bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aexe18bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shield-exclamation"} {...others} />);
}

export default Component;
