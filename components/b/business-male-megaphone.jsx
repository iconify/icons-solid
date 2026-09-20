import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z2_norb-c.css';
import '../../css/a/adn0nip1q.css';
import '../../css/k/knlhs7bea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="z2_norb-c"/><path class="adn0nip1q"/><path class="knlhs7bea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-male-megaphone"} {...others} />);
}

export default Component;
