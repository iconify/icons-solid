import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7o0d5k6d.css';
import '../../css/p/p0-xxqbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7o0d5k6d"/><path class="p0-xxqbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-actions-merge-bold"} {...others} />);
}

export default Component;
