import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3n43-bnv.css';
import '../../css/t/tjg1izbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3n43-bnv"/><path clip-rule="evenodd" class="tjg1izbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-bold"} {...others} />);
}

export default Component;
