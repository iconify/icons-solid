import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7jllbb4j.css';
import '../../css/b/bx4_vlbad.css';
import '../../css/n/n3enlbj8a.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="l7jllbb4j"/><path class="bx4_vlbad"/><path class="n3enlbj8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:curacao"} {...others} />);
}

export default Component;
