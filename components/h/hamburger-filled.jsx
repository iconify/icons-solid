import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glnvg4bft.css';
import '../../css/v/vqic2ia8z.css';
import '../../css/u/u5f0yi99u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glnvg4bft"/><path clip-rule="evenodd" class="vqic2ia8z"/><path class="u5f0yi99u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hamburger-filled"} {...others} />);
}

export default Component;
