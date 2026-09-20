import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7y7bpxwb.css';
import '../../css/u/u53qgwj4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7y7bpxwb"/><path class="u53qgwj4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tree-fill"} {...others} />);
}

export default Component;
