import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz498ccmf.css';
import '../../css/z/z7-yybbxj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="oz498ccmf"/><path class="z7-yybbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:home-twotone"} {...others} />);
}

export default Component;
