import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts8762bta.css';
import '../../css/a/au3jsqbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts8762bta"/><path class="au3jsqbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:optimization-graph-bold"} {...others} />);
}

export default Component;
