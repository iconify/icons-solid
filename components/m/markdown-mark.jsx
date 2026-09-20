import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2eg_5l7t.css';
import '../../css/x/xlm34w3pk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z2eg_5l7t"/><path clip-rule="evenodd" class="xlm34w3pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:markdown-mark"} {...others} />);
}

export default Component;
