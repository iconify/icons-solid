import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnvj0fsqr.css';
import '../../css/k/kqkvu1bgm.css';
import '../../css/a/a22-aez3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnvj0fsqr"/><path class="kqkvu1bgm"/><path class="a22-aez3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-duotone"} {...others} />);
}

export default Component;
