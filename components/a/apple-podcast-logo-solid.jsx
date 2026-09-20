import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqqqstb_q.css';
import '../../css/c/c3tksvemq.css';
import '../../css/m/mtikz3cki.css';
import '../../css/b/bepyfqbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqqqstb_q"/><path clip-rule="evenodd" class="c3tksvemq"/><path clip-rule="evenodd" class="mtikz3cki"/><path class="bepyfqbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-podcast-logo-solid"} {...others} />);
}

export default Component;
