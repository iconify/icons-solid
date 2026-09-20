import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi4tymrtz.css';
import '../../css/n/n6czn--le.css';
import '../../css/f/fjvtlht_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qi4tymrtz"/><path clip-rule="evenodd" class="n6czn--le"/><path clip-rule="evenodd" class="fjvtlht_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-laugh-light"} {...others} />);
}

export default Component;
