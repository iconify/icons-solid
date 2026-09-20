import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn2e4nb2l.css';
import '../../css/t/tr3-hqbzp.css';
import '../../css/z/z9_diac_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gn2e4nb2l"/><path class="tr3-hqbzp"/><path class="z9_diac_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nbt"} {...others} />);
}

export default Component;
