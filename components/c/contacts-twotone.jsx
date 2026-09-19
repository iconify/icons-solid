import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_imcobsl.css';
import '../../css/t/tzb-fjbvg.css';
import '../../css/z/zxol_fymk.css';
import '../../css/c/ckhj8wq2j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a_imcobsl"/><path class="tzb-fjbvg"/><path class="zxol_fymk"/><path class="ckhj8wq2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:contacts-twotone"} {...others} />);
}

export default Component;
