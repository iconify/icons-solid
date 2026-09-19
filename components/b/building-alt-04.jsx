import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmf_k48cg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lmf_k48cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:building-alt-04"} {...others} />);
}

export default Component;
