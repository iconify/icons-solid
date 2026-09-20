import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poz-6ab6g.css';
import '../../css/e/eik2w9bro.css';
import '../../css/o/o-67ar76j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="poz-6ab6g"/><path class="eik2w9bro"/><path class="o-67ar76j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:headphones-1"} {...others} />);
}

export default Component;
