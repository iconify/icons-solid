import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpt8o4b1z.css';
import '../../css/f/ftf3a2zak.css';
import '../../css/d/dzism2bzg.css';
import '../../css/z/zs0elrbfp.css';
import '../../css/d/dusd2bb1j.css';
import '../../css/u/uhlgbac0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpt8o4b1z"/><path class="ftf3a2zak"/><path class="dzism2bzg"/><path class="zs0elrbfp"/><path class="dusd2bb1j"/><path class="uhlgbac0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-bold"} {...others} />);
}

export default Component;
